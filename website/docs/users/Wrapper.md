---
sidebar_position: 10
---

# Wrapper

TestElement use **[Lombok](https://projectlombok.org)** to generate POJO with Builder.

Each test element use the same name of the origin test element but with suffix Wrapper.

Wrapper can be instantiated directly but it's recommended to use builder.


# Builder
JMC is based on **[Lombok SuperBuilder](https://projectlombok.org/features/experimental/SuperBuilder)** to generate builder.

## Builder

You can get the builder of componenet calling the static method builder() on type.

## Simple Attribute

In builder all simple attribute has a prefix with\*.

## Collections Attribute

All list attributes has a prefix add\*, to add values to the list value.

1. add{Attributename}( _oneValue_ )
1. add{Attributename}**s**( _listValue_ )

## Simplified add\*

For same simple object a simplified add method is present, for example : argument composed by (key, value) we an found the following method **addArgument( String** key,**String** value **)**

## Attributes

### childs (AKA children)

Childs attrbutes contain the list of children of testElement they are equivalent the children nodes in GUI.
addChild/addChilds are not available but depends of node type the correct method is available :

| Methods                           | Available for                      |
| ---------------------------------- | ---------------------------------- |
| addThread/addThreads               | TestPlan                           |
| addController/addController        | Thread/Controller                  |
| addSampler/addSampler              | Thread/Controller                  |
| addConfig/addConfigs               | TestPlan/Thread/Controller/Sampler |
| addPreProcessor/addPreProcessors   | TestPlan/Thread/Controller/Sampler |
| addPostProcessor/addPostProcessors | TestPlan/Thread/Controller/Sampler |
| addTimer/addTimers                 | TestPlan/Thread/Controller/Sampler |
| addListener/addListeners           | TestPlan/Thread/Controller/Sampler |
| addPostProcessor/addPostProcessors | TestPlan/Thread/Controller/Sampler |
| addTimer/addTimers                 | TestPlan/Thread/Controller/Sampler |
| addAssertion/addAssertions         | TestPlan/Thread/Controller/Sampler |

### Tags

Tags are string value that can be used to identify a testElement or group of testElements, they an be used with **[interceptors](/docs/users/Interceptor)**
