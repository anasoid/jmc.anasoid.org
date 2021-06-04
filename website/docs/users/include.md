---
sidebar_position: 70
---

# JMX Include

Jmx include let you include JMX fragment in your code. This can help for Component who are not yet available in JMC.

Depend on the node type you want to include use the following Class.

| Type                       | Class                          | children types       |
| -------------------------- | ------------------------------ | -------------------- |
| **Thread Group**           | ThreadGroupJmxIncludeWrapper   | Controllers/Samplers |
| **Controllers**            | ControllerJmxIncludeWrapper    | Controllers/Samplers |
| **Samplers**               | SamplerJmxIncludeWrapper       | Samplers             |
| **Configuration Elements** | ConfigElementJmxIncludeWrapper | -                    |
| **Pre-Processors**         | PreProcessorJmxIncludeWrapper  | -                    |
| **Post-Processors**        | PostProcessorJmxIncludeWrapper | -                    |
| **Timers**                 | TimerJmxIncludeWrapper         | -                    |
| **Assertions**             | AssertionJmxIncludeWrapper     | -                    |
| **Listeners**              | ListenerJmxIncludeWrapper      | -                    |

> when you extend from a Wrapper class you have to annotated class with _'@SuperBuilder(setterPrefix = "with", toBuilder = true)'_ . Full package is _lombok.experimental.SuperBuilder_

Important Method to be used with JMX include are :

**withPath :** give the resource path of JMX file.
**withParams :** Input Map for parametrized file.

## JMX File

To have the JMX file you can save any node in Jmeter using the menu **"save as Test Fragment"**.

## Parameterized file.

You can replace any text in JMX fragment to be replaced dynamically by code.
JMC parameter have the following format ${jmc.**paramname**}: EX :
Chose parameter name : for example "displayJMeterProperties", in JMX file replace content by ${jmc.displayJMeterProperties}

Ex:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.4.1">
  <hashTree>
    <TestFragmentController guiclass="TestFragmentControllerGui" testclass="TestFragmentController" testname="Test Fragment" enabled="false"/>
    <hashTree>
      <DebugSampler guiclass="TestBeanGUI" testclass="DebugSampler" testname="Debug Sampler" enabled="true">
        <boolProp name="displayJMeterProperties">${jmc.displayJMeterProperties}</boolProp>
        <boolProp name="displayJMeterVariables">true</boolProp>
        <boolProp name="displaySystemProperties">false</boolProp>
      </DebugSampler>
      <hashTree/>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
```

Input parameters can be provided using **withParams** method, or with @JmcParam annotation when using subClass.

## Two way are available to use JMX include.

### Using extends

Extends from the Class of your type and override method **getDefaultPath** to return the resource path of JMX file.

Ex :

```jsx
@SuperBuilder(setterPrefix = "with", toBuilder = true)
public class DebugSamplerJmxIncludeWrapperTesting extends SamplerJmxIncludeWrapper {

  private static final String PARENT_PATH = "org/anasoid/jmc/core/wrapper/jmeter/jmc/generic";

  void DebugSamplerJmxIncludeWrapperTesting(boolean displayJMeterProperties){
     this.displayJMeterProperties=displayJMeterProperties;
  }

  @JmcParam("displayJMeterProperties")
  private static final Boolean displayJMeterProperties = false;

  @Override
  protected String getDefaultPath() {
    return "org/myproject/jmx/include/debugsampler.jmx";
  }
}

```

### Using Direct Class

To use direct Class you can use the class of your type and give the path of JMX file.

```jsx
    TestPlanWrapper testPlanWrapper =
        TestPlanWrapper.builder()
            .addThread(
                ThreadGroupWrapper.builder()
                    .addSampler(
                        SamplerJmxIncludeWrapper.builder()
                            .withPath("org/myproject/jmx/include/debugsampler.jmx")
                            .withParams(Map.of("displayJMeterProperties", "true"))
                            .build())
                    .build())
            .build();

```
