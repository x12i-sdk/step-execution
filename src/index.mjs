import assert from 'node:assert/strict';
import { runStep } from '@x12i/step-execution';

let calls = 0;
const outcome = await runStep({
  step: { id: 'summarize', run: async ctx => {
    const answer = await ctx.ai.complete({ promptId: 'demo', prompt: 'Summarize', evidence: ctx.inputs });
    return { outcome: 'emit', data: { summary: answer.text } };
  } },
  inputs: { title: 'Usage example' }, signal: new AbortController().signal, limits: { maxCalls: 1 },
  complete: async request => { calls++; assert.equal(request.promptId, 'demo'); return { text: 'Local fixture summary' }; },
});
assert.equal(calls, 1);
assert.equal(outcome.outcome, 'emit');
assert.equal(outcome.data.summary, 'Local fixture summary');
console.log(outcome);
// The host callback is a fixture. No provider or external service is called.
