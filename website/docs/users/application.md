---
sidebar_position: 20
---

# Application

org.anasoid.jmc.core.application.**ApplicationTest** is the main Class of Jmeter test.

ApplicationTest take a testPlan and Interceptors than it can generate JMX file or execute test directly.

### Big View on code:

```java
  /**
   * create application test.
   *
   * @param testPlanWrapper test plan.
   */
  public ApplicationTest(TestPlanWrapper testPlanWrapper) {
    ...  }

  /**
   * create application test.
   *
   * @param testPlanWrapper test plan.
   * @param prepareInterceptors interceptors.
   */
  public ApplicationTest(
      TestPlanWrapper testPlanWrapper, List<PrepareInterceptor> prepareInterceptors) {
. . .
  }


  /**
   * Generate Jmx file.
   *
   * @param out Destination output.
   * @throws IOException – If an I/O error occurs.
   */
  public TestElementWrapper toJmx(Writer out) throws IOException { 
. . .
  }

  /**
   * Generate Jmx file.
   *
   * @param file Destination output.
   * @throws IOException – If an I/O error occurs.
   */
  public TestElementWrapper toJmx(File file) throws IOException { 
. . .
  }


    /**
   * Execute test.
   *
   * @throws IOException – If an I/O error occurs.
   */
  public void run() throws IOException {
. . .
  }
```

