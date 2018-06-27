# 1. Reader Errors

| Date       | Tags    |
|------------|---------|
| 2018-06-27 | archi   |

## Status

Proposed

## Context

A number of errors might happen during an extension definition read. End users must have access to precise knowledge of which errors were raised.

## Decision

To facilitate handling all errors will have the same shape and share common attributes. See newly introduced `pluto.reader.errors` namespace.

## Consequences

All errors accumulated during read will follow proposed format.
