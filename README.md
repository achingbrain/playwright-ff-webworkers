# Playwright Firefox Webworkers

Webworker code gets run twice in Firefox and the globalThis object is different in each run?

Install deps:

```console
$ npm i
```

The example starts an instance of Firefox and loads `html/index.html`, which in turn loads a
single webworker which just prints a console line.

In practice it prints two console lines with different values for `globalThis`.

Run example:

```console
$ npm start

> playwright-ff-webworkers@1.0.0 start
> node .

globalThis in worker is JSHandle@object
globalThis in worker is [object DedicatedWorkerGlobalScope]
```
