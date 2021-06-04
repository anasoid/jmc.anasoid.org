---
sidebar_position: 60
---

# DSL (BETA)

DSL are Helper classes in the package **org.anasoid.jmc.core.dsl** that give a quick way to instantiate common usage of Wrapper.

## Example

```jsx
HttpSamplerDsl.get("Home Page", "/");
```

Equivalent to:

```jsx
HTTPSamplerProxyWrapper.builder().withName("Home Page").withPath("/");
```
