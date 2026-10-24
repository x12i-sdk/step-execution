# @x12i/step-execution usage example

Run one step. Code and model calls share the same context and outcome. The caller supplies the model callback.

This consuming application demonstrates **run a model-assisted step with an explicit local callback** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Run a code step and a model step with the same context and outcome contract.
- Supply a model callback from the host application instead of coupling the runner to a provider.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/step-execution)
- [Implementation monorepo](https://github.com/x12i/memorix-skills)
- [Reviewed package source](https://github.com/x12i/memorix-skills/tree/7cbf8b24f4de87d0a0a1b6ee738756a804856de2/packages/step-execution)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
