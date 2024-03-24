# Monodeno - A JurassicJS package for using deno commands in a monorepo with deno workspaces

## Description

Monodeno is a JurassicJS package that provides a simple way to run deno commands in a monorepo with deno workspaces. It is a wrapper around the deno command that allows you to run deno commands in a monorepo with deno workspaces.

## Functionality

deno monorepo <command>

## setup
ensure you have workpaces in your deno project. For example, in your `deno.json` file, you should have something like this:
```json
{
  "workspaces": [
    "apps/web",
    "apps/docs",
  ]
}
```

## Usage Example

```base
deno monorepo task greet
```

This task will run the `greet` command in all the workspaces in your monorepo.
