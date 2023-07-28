export type GlossaryItem = {
  term: string;
  description: string;
  ref?: string;
  seeAlso?: string;
  synonyms?: string;
};

export const glossary: GlossaryItem[] = [
  {
    term: "Acceptance criteria",
    ref: "ISO 24765",
    description:
      "The criteria that a component or system must satisfy in order to be accepted by a user, customer, or other authorized entity.",
  },
  {
    term: "Acceptance testing",
    ref: "After ISO 24765",
    seeAlso: "user acceptance testing",
    description:
      "Formal testing with respect to user needs, requirements, and business processes conducted to determine whether or not a system satisfies the acceptance criteria and to enable the user, customers, or other authorized entity to determine whether or not to accept the system.",
  },
  {
    term: "Accessibility",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system can be used by people with the widest range of characteristics and capabilities to achieve a specified goal in a specified context of use.",
  },
  {
    term: "Accessibility testing",
    ref: "Gerrard",
    description:
      "Testing to determine the ease by which users with disabilities can use a component or system.",
  },
  {
    term: "Actual result",
    synonyms: "actual outcome",
    description:
      "The behavior produced/observed when a component or system is tested.",
  },
  {
    term: "Ad hoc reviewing",
    ref: "After ISO 20246",
    description:
      "A review technique carried out by independent reviewers informally, without a structured process.",
  },
  {
    term: "Alpha testing",
    description:
      "Simulated or actual operational testing conducted in the developer's test environment, by roles outside the development organization.",
  },
  {
    term: "Anomaly",
    ref: "IEEE 1044",
    seeAlso: "defect, error, fault, failure, incident, problem",
    description:
      "Any condition that deviates from expectation based on requirements specifications, design documents, user documents, standards, etc., or from someone's perception or experience. Anomalies may be found during, but not limited to, reviewing, testing, analysis, compilation, or use of software products or applicable documentation.",
  },
  {
    term: "Audit",
    ref: "After IEEE 1028",
    description:
      "An independent examination of a work product, process, or set of processes that is performed by a third party to assess compliance with specifications, standards, contractual agreements, or other criteria.",
  },
  {
    term: "Availability",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system is operational and accessible when required for use.",
  },
  {
    term: "Behavior",
    description:
      "The response of a component or system to a set of input values and preconditions.",
  },
  {
    term: "Beta testing",
    synonyms: "field testing",
    description:
      "Simulated or actual operational testing conducted at an external site, by roles outside the development organization.",
  },
  {
    term: "Black-box test technique",
    synonyms:
      "black-box technique, specification-based technique, specification-based test technique",
    description:
      "A procedure to derive and/or select test cases based on an analysis of the specification, either functional or non-functional, of a component or system without reference to its internal structure.",
  },
  {
    term: "Boundary value",
    description:
      "A minimum or maximum value of an ordered equivalence partition.",
  },
  {
    term: "Boundary value analysis",
    seeAlso: "boundary value",
    description:
      "A black-box test technique in which test cases are designed based on boundary values.",
  },
  {
    term: "Burndown chart",
    description:
      "A publicly displayed chart that depicts the outstanding effort versus time in an iteration. It shows the status and trend of completing the tasks of the iteration. The X-axis typically represents days in the sprint, while the Y-axis is the remaining effort (usually either in ideal engineering hours or story points).",
  },
  {
    term: "Checklist-based reviewing",
    ref: "ISO 20246",
    description:
      "A review technique guided by a list of questions or required attributes.",
  },
  {
    term: "Checklist-based testing",
    description:
      "An experience-based test technique whereby the experienced tester uses a high-level list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product has to be verified.",
  },
  {
    term: "Code coverage",
    description:
      "An analysis method that determines which parts of the software have been executed (covered) by the test suite and which parts have not been executed, e.g., statement coverage, decision coverage, or condition coverage.",
  },
  {
    term: "Commercial off-the-shelf (COTS)",
    synonyms: "off-the-shelf software",
    description:
      "A software product that is developed for the general market, i.e. for a large number of customers, and that is delivered to many customers in identical format.",
  },
  {
    term: "Compatibility",
    description:
      "The degree to which a component or system can exchange information with other components or systems.",
  },
  {
    term: "Complexity",
    seeAlso: "cyclomatic complexity",
    description:
      "The degree to which a component or system has a design and/or internal structure that is difficult to understand, maintain, and verify.",
  },
  {
    term: "Compliance",
    ref: "IEEE 730",
    description:
      "The capability of the software product to adhere to standards, conventions, or regulations in laws and similar prescriptions.",
  },
  {
    term: "Component",
    synonyms: "module, unit",
    description: "A minimal part of a system that can be tested in isolation.",
  },
  {
    term: "Component integration testing",
    synonyms: "link testing",
    description:
      "Testing performed to expose defects in the interfaces and interactions between integrated components.",
  },
  {
    term: "Component specification",
    description:
      "A description of a component's function in terms of its output values for specified input values under specified conditions, and required non-functional behavior (e.g., resource utilization).",
  },
  {
    term: "Component testing",
    ref: "ISO 24765",
    synonyms: "module testing, unit testing",
    description: "The testing of individual hardware or software components.",
  },
  {
    term: "Condition",
    seeAlso: "condition testing",
    synonyms: "branch condition",
    description:
      "A logical expression that can be evaluated as True or False, e.g., A>B.",
  },
  {
    term: "Configuration",
    description:
      "The composition of a component or system as defined by the number, nature, and interconnections of its constituent parts.",
  },
  {
    term: "Configuration item",
    ref: "ISO 24765",
    description:
      "An aggregation of work products that is designated for configuration management and treated as a single entity in the configuration management process.",
  },
  {
    term: "Configuration management",
    ref: "ISO 24765",
    description:
      "A discipline applying technical and administrative direction and surveillance to identify and document the functional and physical characteristics of a configuration item, control changes to those characteristics, record and report change processing and implementation status, and verify compliance with specified requirements.",
  },
  {
    term: "Configuration management tool",
    description:
      "A tool that provides support for the identification and control of configuration items, their status over changes and versions, and the release of baselines consisting of configuration items.",
  },
  {
    term: "Confirmation testing",
    synonyms: "re-testing",
    description:
      "Dynamic testing conducted after fixing defects with the objective to confirm that failures caused by those defects do not occur anymore.",
  },
  {
    term: "Contractual acceptance testing",
    description:
      "Acceptance testing conducted to verify whether a system satisfies its contractual requirements.",
  },
  {
    term: "Control flow",
    ref: "ISO 29119",
    description:
      "The sequence in which operations are performed during the execution of a test item.",
  },
  {
    term: "Cost of quality",
    description:
      "The total costs incurred on quality activities and issues and often split into prevention costs, appraisal costs, internal failure costs, and external failure costs.",
  },
  {
    term: "Coverage",
    ref: "After ISO 29119",
    synonyms: "test coverage",
    description:
      "The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage.",
  },
  {
    term: "Coverage item",
    ref: "ISO 29119",
    description:
      "An attribute or combination of attributes that is derived from one or more test conditions by using a test technique that enables the measurement of the thoroughness of the test execution.",
  },
  {
    term: "Coverage tool",
    synonyms: "coverage measurement tool",
    description:
      "A tool that provides objective measures of what structural elements, e.g., statements, branches have been exercised by a test suite.",
  },
  {
    term: "Data flow",
    ref: "Beiser",
    description:
      "An abstract representation of the sequence and possible changes of the state of data objects, where the state of an object is any of creation, usage, or destruction.",
  },
  {
    term: "Data-driven testing",
    ref: "Fewster and Graham",
    seeAlso: "keyword-driven testing",
    description:
      "A scripting technique that stores test input and expected results in a table or spreadsheet, so that a single control script can execute all of the tests in the table. Data-driven testing is often used to support the application of test execution tools such as capture/playback tools.",
  },
  {
    term: "Debugging",
    description:
      "The process of finding, analyzing and removing the causes of failures in software.",
  },
  {
    term: "Decision",
    ref: "ISO 29119",
    description:
      "A type of statement in which a choice between two or more possible outcomes controls which set of actions will result.",
  },
  {
    term: "Decision coverage",
    description: "The coverage of decision outcomes.",
  },
  {
    term: "Decision outcome",
    description:
      "The result of a decision that determines the next statement to be executed.",
  },
  {
    term: "Decision table",
    ref: "ISO 24765",
    synonyms: "cause-effect decision table",
    description:
      "A table used to show sets of conditions and the actions resulting from them.",
  },
  {
    term: "Decision table testing",
    ref: "Egler63",
    seeAlso: "decision table",
    description:
      "A black-box test technique in which test cases are designed to execute the combinations of inputs and/or stimuli (causes) shown in a decision table.",
  },
  {
    term: "Decision testing",
    description:
      "A white-box test technique in which test cases are designed to execute decision outcomes.",
  },
  {
    term: "Defect",
    ref: "After IEEE 1044",
    synonyms: "bug, fault",
    description:
      "An imperfection or deficiency in a work product where it does not meet its requirements or specifications.",
  },
  {
    term: "Defect density",
    ref: "After ISO 24765",
    synonyms: "fault density",
    description: "The number of defects per unit size of a work product.",
  },
  {
    term: "Defect management",
    seeAlso: "incident management",
    description:
      "The process of recognizing and recording defects, classifying them, investigating them, taking action to resolve them, and disposing of them when resolved.",
  },
  {
    term: "Defect management tool",
    seeAlso: "incident management tool",
    synonyms: "bug tracking tool, defect tracking tool",
    description:
      "A tool that facilitates the recording and status tracking of defects.",
  },
  {
    term: "Defect report",
    seeAlso: "incident report",
    synonyms: "bug report",
    description:
      "Documentation of the occurrence, nature, and status of a defect.",
  },
  {
    term: "Driver",
    ref: "After TMap",
    synonyms: "test driver",
    description:
      "A software component or test tool that replaces a component that takes care of the control and/or the calling of a component or system.",
  },
  {
    term: "Dynamic analysis",
    ref: "After IEEE 610",
    description:
      "The process of evaluating behavior, e.g., memory performance, CPU usage, of a system or component during execution.",
  },
  {
    term: "Dynamic analysis tool",
    description:
      "A tool that provides run-time information on the state of the software code. These tools are most commonly used to identify unassigned pointers, check pointer arithmetic and to monitor the allocation, use, and de-allocation of memory and to flag memory leaks.",
  },
  {
    term: "Dynamic testing",
    description:
      "Testing that involves the execution of the software of a component or system.",
  },
  {
    term: "Expected result",
    ref: "After ISO 29119",
    synonyms: "expected outcome, predicted outcome",
    description:
      "The predicted observable behavior of a component or system executing under specified conditions, based on its specification or another source.",
  },
  {
    term: "Experience-based test technique",
    synonyms: "experience-based technique",
    description:
      "A procedure to derive and/or select test cases based on the tester's experience, knowledge, and intuition.",
  },
  {
    term: "Experience-based testing",
    description:
      "Testing based on the tester's experience, knowledge, and intuition.",
  },
  {
    term: "Exploratory testing",
    ref: "After ISO 29119",
    description:
      "An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item, and the results of previous tests.",
  },
  {
    term: "Extreme Programming (XP)",
    seeAlso: "Agile software development",
    description:
      "A software engineering methodology used within Agile software development whereby core practices are programming in pairs, doing extensive code review, unit testing of all code, and simplicity and clarity in code.",
  },
  {
    term: "Facilitator",
    ref: "After IEEE 1028",
    seeAlso: "moderator",
    description:
      "The leader and main person responsible for an inspection or review process.",
  },
  {
    term: "Fail",
    description:
      "A test is deemed to fail if its actual result does not match its expected result.",
  },
  {
    term: "Failure",
    ref: "After ISO 24765",
    description:
      "An event in which a component or system does not perform a required function within specified limits.",
  },
  {
    term: "Failure rate",
    ref: "ISO 24765",
    description:
      "The ratio of the number of failures of a given category to a given unit of measure.",
  },
  {
    term: "Feature",
    ref: "After IEEE 1008",
    synonyms: "software feature",
    description:
      "An attribute of a component or system specified or implied by requirements documentation (for example, reliability, usability, or design constraints).",
  },
  {
    term: "Finding",
    description:
      "A result of an evaluation that identifies some important issue, problem, or opportunity.",
  },
  {
    term: "Formal review",
    ref: "ISO 20246",
    description:
      "A form of review that follows a defined process with a formally documented output.",
  },
  {
    term: "Functional integration",
    seeAlso: "integration testing",
    description:
      "An integration approach that combines the components or systems for the purpose of getting a basic functionality working early.",
  },
  {
    term: "Functional requirement",
    ref: "ISO 24765",
    description:
      "A requirement that specifies a function that a component or system must be able to perform.",
  },
  {
    term: "Functional suitability",
    ref: "After ISO 25010",
    synonyms: "functionality",
    description:
      "The degree to which a component or system provides functions that meet stated and implied needs when used under specified conditions.",
  },
  {
    term: "Functional testing",
    ref: "ISO 24765",
    seeAlso: "black-box testing",
    description:
      "Testing conducted to evaluate the compliance of a component or system with functional requirements.",
  },
  {
    term: "GUI",
    description: "Acronym for Graphical User Interface.",
  },
  {
    term: "High-level test case",
    seeAlso: "low-level test case",
    synonyms: "abstract test case, logical test case",
    description:
      "A test case without concrete values for input data and expected results.",
  },
  {
    term: "IDEAL",
    description:
      "An organizational improvement model that serves as a roadmap for initiating, planning, and implementing improvement actions. The IDEAL model is named for the five phases it describes: initiating, diagnosing, establishing, acting, and learning.",
  },
  {
    term: "Impact analysis",
    ref: "After ISO 24765",
    description:
      "The identification of all work products affected by a change, including an estimate of the resources needed to accomplish the change.",
  },
  {
    term: "Incident report",
    ref: "ISO 29119",
    synonyms:
      "deviation report, software test incident report, test incident report",
    description:
      "Documentation of the occurrence, nature, and status of an incident.",
  },
  {
    term: "Incremental development model",
    ref: "After PMBOK",
    seeAlso: "iterative development model",
    description:
      "A development lifecycle model in which the project scope is generally determined early in the project lifecycle, but time and cost estimates are routinely modified as the project team understanding of the product increases. The product is developed through a series of repeated cycles, each delivering an increment which successively adds to the functionality of the product.",
  },
  {
    term: "Independence of testing",
    ref: "After DO-178b",
    description:
      "Separation of responsibilities, which encourages the accomplishment of objective testing.",
  },
  {
    term: "Informal group review",
    ref: "ISO 20246",
    seeAlso: "informal review",
    description: "An informal review performed by three or more persons.",
  },
  {
    term: "Informal review",
    ref: "ISO 20246",
    description: "A type of review without a formal (documented) procedure.",
  },
  {
    term: "Input",
    ref: "ISO 24765",
    description:
      "Data received by a component or system from an external source.",
  },
  {
    term: "Inspection",
    ref: "After ISO 20246",
    description:
      "A type of formal review to identify issues in a work product, which provides measurement to improve the review process and the software development process.",
  },
  {
    term: "Installation guide",
    description:
      "Supplied instructions on any suitable media, which guide the installer through the installation process. This may be a manual guide, step-by-step procedure, installation wizard, or any other similar process description.",
  },
  {
    term: "Integration",
    description:
      "The process of combining components or systems into larger assemblies.",
  },
  {
    term: "Integration testing",
    seeAlso: "component integration testing, system integration testing",
    description:
      "Testing performed to expose defects in the interfaces and in the interactions between integrated components or systems.",
  },
  {
    term: "Interoperability",
    ref: "After ISO 25010",
    description:
      "The degree to which two or more components or systems can exchange information and use the information that has been exchanged.",
  },
  {
    term: "Interoperability testing",
    seeAlso: "functionality testing",
    synonyms: "compatibility testing",
    description:
      "Testing to determine the interoperability of a software product.",
  },
  {
    term: "Iterative development model",
    description:
      "A development lifecycle where a project is broken into a usually large number of iterations. An iteration is a complete development loop resulting in a release (internal or external) of an executable product, a subset of the final product under development, which grows from iteration to iteration to become the final product.",
  },
  {
    term: "Keyword-driven testing",
    seeAlso: "data-driven testing",
    synonyms: "action word-driven testing",
    description:
      "A scripting technique that uses data files to contain not only test data and expected results but also keywords related to the application being tested. The keywords are interpreted by special supporting scripts that are called by the control script for the test.",
  },
  {
    term: "Lifecycle model",
    ref: "CMMI",
    seeAlso: "software lifecycle",
    description:
      "A description of the processes, workflows, and activities used in the development, delivery, maintenance, and retirement of a system.",
  },
  {
    term: "Load testing",
    ref: "After ISO 29119",
    seeAlso: "performance testing, stress testing",
    description:
      "A type of performance testing conducted to evaluate the behavior of a component or system under varying loads, usually between anticipated conditions of low, typical, and peak usage.",
  },
  {
    term: "Low-level test case",
    seeAlso: "high-level test case",
    synonyms: "concrete test case",
    description:
      "A test case with concrete values for input data and expected results.",
  },
  {
    term: "Maintainability",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system can be modified by the intended maintainers.",
  },
  {
    term: "Maintenance",
    ref: "After ISO 14764",
    description:
      "The process of modifying a component or system after delivery to correct defects, improve quality attributes, or adapt to a changed environment.",
  },
  {
    term: "Maintenance testing",
    description:
      "Testing the changes to an operational system or the impact of a changed environment on an operational system.",
  },
  {
    term: "Master test plan",
    seeAlso: "test plan",
    description:
      "A test plan that is used to coordinate multiple test levels or test types.",
  },
  {
    term: "Maturity",
    ref: "ISO 25010",
    description:
      "(1) The capability of an organization with respect to the effectiveness and efficiency of its processes and work practices. (2) The degree to which a component or system meets needs for reliability under normal operation.",
  },
  {
    term: "Measure",
    ref: "After ISO 25040",
    description:
      "The number or category assigned to an attribute of an entity by making a measurement.",
  },
  {
    term: "Measurement",
    ref: "After ISO 25040",
    description:
      "The process of assigning a number or category to an entity to describe an attribute of that entity.",
  },
  {
    term: "Memory leak",
    description:
      "A memory access failure due to a defect in a program's dynamic store allocation logic that causes it to fail to release memory after it has finished using it, eventually causing the program and/or other concurrent processes to fail due to lack of memory.",
  },
  {
    term: "Metric",
    description: "A measurement scale and the method used for measurement.",
  },
  {
    term: "Milestone",
    description:
      "A point in time in a project at which defined (intermediate) deliverables and results should be ready.",
  },
  {
    term: "Model-based testing (MBT)",
    description: "Testing based on or involving models.",
  },
  {
    term: "Moderator",
    seeAlso: "facilitator",
    synonyms: "inspection leader",
    description: "A neutral person who conducts a usability test session.",
  },
  {
    term: "Monitoring tool",
    ref: "ISO 24765",
    seeAlso: "dynamic analysis tool",
    description:
      "A software tool or hardware device that runs concurrently with the component or system under test and supervises, records, and/or analyzes the behavior of the component or system.",
  },
  {
    term: "Non-functional requirement",
    ref: "After ISO 24765",
    description:
      "A requirement that describes how the component or system will do what it is intended to do.",
  },
  {
    term: "Non-functional testing",
    description:
      "Testing conducted to evaluate the compliance of a component or system with non-functional requirements.",
  },
  {
    term: "Operational acceptance testing",
    seeAlso: "operational testing",
    synonyms: "production acceptance testing",
    description:
      "Operational testing in the acceptance test phase, typically performed in a (simulated) operational environment by operations and/or systems administration staff focusing on operational aspects, e.g., recoverability, resource-behavior, installability, and technical compliance.",
  },
  {
    term: "Operational environment",
    description:
      "Hardware and software products installed at users' or customers' sites where the component or system under test will be used. The software may include operating systems, database management systems, and other applications.",
  },
  {
    term: "Output",
    ref: "After ISO 24765",
    description:
      "Data transmitted by a component or system to an external destination.",
  },
  {
    term: "Pass",
    description:
      "A test is deemed to pass if its actual result matches its expected result.",
  },
  {
    term: "Path",
    synonyms: "control flow path",
    description:
      "A sequence of events, e.g., executable statements, of a component or system from an entry point to an exit point.",
  },
  {
    term: "Peer review",
    ref: "After ISO 20246",
    description:
      "A form of review of work products performed by others qualified to do the same work.",
  },
  {
    term: "Performance efficiency",
    ref: "After ISO 25010",
    synonyms: "time behavior, performance",
    description:
      "The degree to which a component or system uses time, resources, and capacity when accomplishing its designated functions.",
  },
  {
    term: "Performance indicator",
    ref: "CMMI",
    synonyms: "key performance indicator",
    description:
      "A high-level metric of effectiveness and/or efficiency used to guide and control progressive development, e.g., lead-time slip for software development.",
  },
  {
    term: "Performance testing",
    seeAlso: "efficiency testing",
    description: "Testing to determine the performance of a software product.",
  },
  {
    term: "Performance testing tool",
    description:
      "A test tool that generates load for a designated test item and that measures and records its performance during test execution.",
  },
  {
    term: "Perspective-based reading",
    ref: "After ISO 20246",
    synonyms: "perspective-based reviewing",
    description:
      "A review technique whereby reviewers evaluate the work product from different viewpoints.",
  },
  {
    term: "Planning poker",
    seeAlso: "Agile software development, Wideband Delphi",
    description:
      "A consensus-based estimation technique, mostly used to estimate effort or relative size of user stories in Agile software development. It is a variation of the Wideband Delphi method using a deck of cards with values representing the units in which the team estimates.",
  },
  {
    term: "Portability",
    ref: "ISO 9126",
    description:
      "The ease with which the software product can be transferred from one hardware or software environment to another.",
  },
  {
    term: "Portability testing",
    synonyms: "configuration testing",
    description: "Testing to determine the portability of a software product.",
  },
  {
    term: "Postcondition",
    description:
      "The expected state of a test item and its environment at the end of test case execution.",
  },
  {
    term: "Precondition",
    description:
      "The required state of a test item and its environment prior to test case execution.",
  },
  {
    term: "Priority",
    description:
      "The level of (business) importance assigned to an item, e.g., defect.",
  },
  {
    term: "Probe effect",
    description:
      "The effect on the component or system by the measurement instrument when the component or system is being measured, e.g., by a performance testing tool or monitor. For example, performance may be slightly worse when performance testing tools are being used.",
  },
  {
    term: "Problem",
    ref: "ISO 24765",
    description: "An unknown underlying cause of one or more incidents.",
  },
  {
    term: "Process",
    ref: "ISO 12207",
    description:
      "A set of interrelated activities, which transform inputs into outputs.",
  },
  {
    term: "Process improvement",
    ref: "CMMI",
    description:
      "A program of activities designed to improve the performance and maturity of the organization's processes, and the result of such a program.",
  },
  {
    term: "Product risk",
    seeAlso: "risk",
    description: "A risk impacting the quality of a product.",
  },
  {
    term: "Project",
    ref: "ISO 9000",
    description:
      "A project is a unique set of coordinated and controlled activities with start and finish dates undertaken to achieve an objective conforming to specific requirements, including the constraints of time, cost, and resources.",
  },
  {
    term: "Project risk",
    seeAlso: "risk",
    description: "A risk that impacts project success.",
  },
  {
    term: "Quality",
    ref: "ISO 24765",
    description:
      "The degree to which a component, system, or process meets specified requirements and/or user/customer needs and expectations.",
  },
  {
    term: "Quality assurance",
    ref: "ISO 9000",
    description:
      "Part of quality management focused on providing confidence that quality requirements will be fulfilled.",
  },
  {
    term: "Quality characteristic",
    ref: "ISO 24765",
    synonyms:
      "quality characteristic, software product characteristic, software quality characteristic, quality attribute",
    description: "A category of product attributes that bear on quality.",
  },
  {
    term: "Quality control",
    ref: "After ISO 8402",
    description:
      "The operational techniques and activities, part of quality management, that are focused on fulfilling quality requirements.",
  },
  {
    term: "Quality management",
    ref: "ISO 9000",
    description:
      "Coordinated activities to direct and control an organization with regard to quality. Direction and control with regard to quality generally includes the establishment of the quality policy and quality objectives, quality planning, quality control, quality assurance, and quality improvement.",
  },
  {
    term: "Quality risk",
    seeAlso: "quality characteristic, product risk",
    description: "A product risk related to a quality characteristic.",
  },
  {
    term: "Rational Unified Process (RUP)",
    description:
      "A proprietary adaptable iterative software development process framework consisting of four project lifecycle phases: inception, elaboration, construction, and transition.",
  },
  {
    term: "Regression",
    description:
      "A degradation in the quality of a component or system due to a change.",
  },
  {
    term: "Regression testing",
    description:
      "Testing of a previously tested component or system following modification to ensure that defects have not been introduced or have been uncovered in unchanged areas of the software, as a result of the changes made.",
  },
  {
    term: "Regulatory acceptance testing",
    seeAlso: "regulatory acceptance testing",
    synonyms: "production acceptance testing",
    description:
      "Acceptance testing conducted to verify whether a system conforms to relevant laws, policies, and regulations.",
  },
  {
    term: "Reliability",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system performs specified functions under specified conditions for a specified period of time.",
  },
  {
    term: "Reliability growth model",
    description:
      "A model that shows the growth in reliability over time during continuous testing of a component or system as a result of the removal of defects that result in reliability failures.",
  },
  {
    term: "Requirement",
    ref: "ISO 24765",
    description: "A provision that contains criteria to be fulfilled.",
  },
  {
    term: "Requirements management tool",
    description:
      "A tool that supports the recording of requirements, requirements attributes (e.g., priority, knowledge responsible) and annotation, and facilitates traceability through layers of requirements and requirements change management. Some requirements management tools also provide facilities for static analysis, such as consistency checking and violations to pre-defined requirements rules.",
  },
  {
    term: "Result",
    seeAlso: "actual result, expected result",
    synonyms: "outcome, test outcome, test result",
    description:
      "The consequence/outcome of the execution of a test. It includes outputs to screens, changes to data, reports, and communication messages sent out.",
  },
  {
    term: "Retrospective meeting",
    synonyms: "post-project meeting",
    description:
      "A meeting at the end of a project during which the project team members evaluate the project and learn lessons that can be applied to the next project.",
  },
  {
    term: "Review",
    ref: "After IEEE 1028",
    description:
      "A type of static testing during which a work product or process is evaluated by one or more individuals to detect issues and to provide improvements.",
  },
  {
    term: "Review plan",
    description:
      "A document describing the approach, resources, and schedule of intended review activities. It identifies, amongst others: documents and code to be reviewed, review types to be used, participants, as well as entry and exit criteria to be applied in case of formal reviews, and the rationale for their choice. It is a record of the review planning process.",
  },
  {
    term: "Reviewer",
    ref: "After ISO 20246",
    synonyms: "checker, inspector",
    description:
      "A participant in a review, who identifies issues in the work product.",
  },
  {
    term: "Risk",
    description: "A factor that could result in future negative consequences.",
  },
  {
    term: "Risk analysis",
    description:
      "The overall process of risk identification and risk assessment.",
  },
  {
    term: "Risk level",
    synonyms: "risk exposure",
    description:
      "The qualitative or quantitative measure of a risk defined by impact and likelihood.",
  },
  {
    term: "Risk management",
    ref: "ISO 31000",
    description:
      "The coordinated activities to direct and control an organization with regard to risk.",
  },
  {
    term: "Risk mitigation",
    synonyms: "risk control",
    description:
      "The process through which decisions are reached and protective measures are implemented for reducing or maintaining risks to specified levels.",
  },
  {
    term: "Risk type",
    synonyms: "risk category",
    description: "A set of risks grouped by one or more common factors.",
  },
  {
    term: "Risk-based testing",
    ref: "After ISO 29119",
    description:
      "Testing in which the management, selection, prioritization, and use of testing activities and resources are based on corresponding risk types and risk levels.",
  },
  {
    term: "Robustness",
    ref: "ISO 24765",
    seeAlso: "error-tolerance, fault-tolerance",
    description:
      "The degree to which a component or system can function correctly in the presence of invalid inputs or stressful environmental conditions.",
  },
  {
    term: "Role-based reviewing",
    ref: "After ISO 20246",
    description:
      "A review technique where reviewers evaluate a work product from the perspective of different stakeholder roles.",
  },
  {
    term: "Root cause",
    ref: "CMMI",
    description:
      "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed.",
  },
  {
    term: "Root cause analysis",
    synonyms: "causal analysis",
    description:
      "An analysis technique aimed at identifying the root causes of defects. By directing corrective measures at root causes, it is hoped that the likelihood of defect recurrence will be minimized.",
  },
  {
    term: "Safety",
    ref: "After ISO 24765",
    description:
      "The capability that a system will not, under defined conditions, lead to a state in which human life, health, property, or the environment is endangered.",
  },
  {
    term: "Scenario-based reviewing",
    ref: "ISO 20246",
    description:
      "A review technique where the review is guided by determining the ability of the work product to address specific scenarios.",
  },
  {
    term: "Scribe",
    ref: "After IEEE 1028",
    synonyms: "recorder",
    description: "A person who records information during the review meetings.",
  },
  {
    term: "Scrum",
    seeAlso: "Agile software development",
    description:
      "An iterative incremental framework for managing projects commonly used with Agile software development.",
  },
  {
    term: "Security",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system protects information and data so that persons or other components or systems have the degree of access appropriate to their types and levels of authorization.",
  },
  {
    term: "Security testing",
    seeAlso: "functionality testing",
    description: "Testing to determine the security of the software product.",
  },
  {
    term: "Sequential development model",
    description:
      "A type of development lifecycle model in which a complete system is developed in a linear way of several discrete and successive phases with no overlap between them.",
  },
  {
    term: "Session-based testing",
    description:
      "An approach to testing in which test activities are planned as uninterrupted sessions of test design and execution, often used in conjunction with exploratory testing.",
  },
  {
    term: "Severity",
    description:
      "The degree of impact that a defect has on the development or operation of a component or system.",
  },
  {
    term: "Simulation",
    ref: "ISO 2382",
    description:
      "The representation of selected behavioral characteristics of one physical or abstract system by another system.",
  },
  {
    term: "Simulator",
    ref: "ISO 24765",
    seeAlso: "emulator",
    description:
      "A device, computer program or system used during testing, which behaves or operates like a given system when provided with a set of controlled inputs.",
  },
  {
    term: "Software",
    ref: "ISO 24765",
    description:
      "Computer programs, procedures, and possibly associated documentation and data pertaining to the operation of a computer system.",
  },
  {
    term: "Software development lifecycle",
    description:
      "The activities performed at each stage in software development, and how they relate to one another logically and chronologically.",
  },
  {
    term: "Software lifecycle",
    description:
      "The period of time that begins when a software product is conceived and ends when the software is no longer available for use. The software lifecycle typically includes a concept phase, requirements phase, design phase, implementation phase, test phase, installation and checkout phase, operation and maintenance phase, and sometimes, retirement phase. Note these phases may overlap or be performed iteratively.",
  },
  {
    term: "Software quality",
    ref: "After ISO 9126",
    seeAlso: "quality",
    description:
      "The totality of functionality and features of a software product that bear on its ability to satisfy stated or implied needs.",
  },
  {
    term: "Specification",
    ref: "After IEEE 610",
    description:
      "A document that specifies, ideally in a complete, precise and verifiable manner, the requirements, design, behavior, or other characteristics of a component or system, and, often, the procedures for determining whether these provisions have been satisfied.",
  },
  {
    term: "Stability",
    ref: "ISO 25010",
    description:
      "The degree to which a component or system can be effectively and efficiently modified without introducing defects or degrading existing product quality.",
  },
  {
    term: "Standard",
    ref: "After CMMI",
    description:
      "Formal, possibly mandatory, set of requirements developed and used to prescribe consistent approaches to the way of working or to provide guidelines (e.g., ISO/IEC standards, IEEE standards, and organizational standards).",
  },
  {
    term: "State diagram",
    ref: "After ISO 24765",
    synonyms: "state transition diagram",
    description:
      "A diagram that depicts the states that a component or system can assume, and shows the events or circumstances that cause and/or result from a change from one state to another.",
  },
  {
    term: "State transition",
    description: "A transition between two states of a component or system.",
  },
  {
    term: "State transition testing",
    seeAlso: "N-switch testing",
    synonyms: "finite state testing",
    description:
      "A black-box test technique using a state transition diagram or state table to derive test cases to evaluate whether the test item successfully executes valid transitions and blocks invalid transitions.",
  },
  {
    term: "Statement",
    synonyms: "source statement",
    description:
      "An entity in a programming language, which is typically the smallest indivisible unit of execution.",
  },
  {
    term: "Statement coverage",
    description:
      "The percentage of executable statements that have been exercised by a test suite.",
  },
  {
    term: "Statement testing",
    description:
      "A white-box test technique in which test cases are designed to execute statements.",
  },
  {
    term: "Static analysis",
    ref: "After ISO 24765",
    description:
      "The process of evaluating a component or system without executing it, based on its form, structure, content, or documentation.",
  },
  {
    term: "Static testing",
    description: "Testing a work product without code being executed.",
  },
  {
    term: "Structural coverage",
    description:
      "Coverage measures based on the internal structure of a component or system.",
  },
  {
    term: "Stub",
    ref: "After IEEE 610",
    description:
      "A skeletal or special-purpose implementation of a software component, used to develop or test a component that calls or is otherwise dependent on it. It replaces a called component.",
  },
  {
    term: "System",
    ref: "After ISO 24765",
    description:
      "A collection of interacting elements organized to accomplish a specific function or set of functions.",
  },
  {
    term: "System Integration Testing",
    description: "Testing the combination and interaction of systems.",
  },
  {
    term: "System testing",
    ref: "Hetzel",
    description:
      "Testing an integrated system to verify that it meets specified requirements.",
  },
  {
    term: "System under test (SUT)",
    description: "A type of test object that is a system.",
  },
  {
    term: "Technical review",
    ref: "Gilb and Graham, IEEE 1028",
    description:
      "A formal review type by a team of technically-qualified personnel that examines the suitability of a work product for its intended use and identifies discrepancies from specifications and standards.",
  },
  {
    term: "Test",
    description: "A set of one or more test cases.",
  },
  {
    term: "Test analysis",
    description:
      "The activity that identifies test conditions by analyzing the test basis.",
  },
  {
    term: "Test approach",
    description:
      "The implementation of the test strategy for a specific project.",
  },
  {
    term: "Test automation",
    description:
      "The use of software to perform or support test activities, e.g., test management, test design, test execution and results checking.",
  },
  {
    term: "Test basis",
    ref: "After TMap",
    description:
      "The body of knowledge used as the basis for test analysis and design.",
  },
  {
    term: "Test case",
    ref: "After ISO 29119",
    description:
      "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions.",
  },
  {
    term: "Test case specification",
    ref: "ISO 29119",
    seeAlso: "test specification",
    description: "Documentation of a set of one or more test cases.",
  },
  {
    term: "Test charter",
    seeAlso: "exploratory testing",
    synonyms: "charter",
    description:
      "Documentation of test activities in session-based exploratory testing.",
  },
  {
    term: "Test completion",
    ref: "After ISO 29119",
    description:
      "The activity that makes test assets available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders.",
  },
  {
    term: "Test condition",
    synonyms: "test requirement , test situation",
    description:
      "An aspect of the test basis that is relevant in order to achieve specific test objectives.",
  },
  {
    term: "Test control",
    seeAlso: "test management",
    description:
      "A test management task that deals with developing and applying a set of corrective actions to get a test project on track when monitoring shows a deviation from what was planned.",
  },
  {
    term: "Test cycle",
    description:
      "Execution of the test process against a single identifiable release of the test object.",
  },
  {
    term: "Test data",
    ref: "After ISO 29119",
    description:
      "Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases.",
  },
  {
    term: "Test data preparation tool",
    synonyms: "test generator",
    description:
      "A type of test tool that enables data to be selected from existing databases or created, generated, manipulated and edited for use in testing.",
  },
  {
    term: "Test design",
    ref: "After ISO 29119",
    seeAlso: "test design specification",
    description:
      "The activity of deriving and specifying test cases from test conditions.",
  },
  {
    term: "Test design tool",
    description:
      "A tool that supports the test design activity by generating test inputs from a specification that may be held in a CASE tool repository, e.g., requirements management tool, from specified test conditions held in the tool itself, or from code.",
  },
  {
    term: "Test environment",
    ref: "ISO 24765",
    synonyms: "test bed , test rig",
    description:
      "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to conduct a test.",
  },
  {
    term: "Test estimation",
    description:
      "The calculated approximation of a result related to various aspects of testing (e.g., effort spent, completion date, costs involved, number of test cases, etc.) which is usable even if input data may be incomplete, uncertain, or noisy.",
  },
  {
    term: "Test execution",
    description:
      "The process of running a test on the component or system under test, producing actual result(s).",
  },
  {
    term: "Test execution schedule",
    description:
      "A schedule for the execution of test suites within a test cycle.",
  },
  {
    term: "Test execution tool",
    description:
      "A test tool that executes tests against a designated test item and evaluates the outcomes against expected results and postconditions.",
  },
  {
    term: "Test harness",
    description:
      "A test environment comprised of stubs and drivers needed to execute a test.",
  },
  {
    term: "Test implementation",
    description:
      "The activity that prepares the testware needed for test execution based on test analysis and design.",
  },
  {
    term: "Test infrastructure",
    description:
      "The organizational artifacts needed to perform testing, consisting of test environments, test tools, office environment and procedures.",
  },
  {
    term: "Test input",
    description:
      "The data received from an external source by the test object during test execution. The external source can be hardware, software or human.",
  },
  {
    term: "Test item",
    seeAlso: "test object",
    description: "A part of a test object used in the test process.",
  },
  {
    term: "Test leader",
    seeAlso: "test manager",
    synonyms: "lead tester",
    description:
      "On large projects, the person who reports to the test manager and is responsible for project management of a particular test level or a particular set of testing activities.",
  },
  {
    term: "Test level",
    ref: "After ISO 29119",
    synonyms: "test stage",
    description: "A specific instantiation of a test process.",
  },
  {
    term: "Test management",
    ref: "ISO 29119",
    description:
      "The planning, scheduling, estimating, monitoring, reporting, control and completion of test activities.",
  },
  {
    term: "Test management tool",
    description:
      "A tool that provides support to the test management and control part of a test process. It often has several capabilities, such as testware management, scheduling of tests, the logging of results, progress tracking, incident management and test reporting.",
  },
  {
    term: "Test manager",
    description:
      "The person responsible for project management of testing activities and resources, and evaluation of a test object. The individual who directs, controls, administers, plans and regulates the evaluation of a test object.",
  },
  {
    term: "Test monitoring",
    seeAlso: "test management",
    description:
      "A test management activity that involves checking the status of testing activities, identifying any variances from the planned or expected status, and reporting status to stakeholders.",
  },
  {
    term: "Test object",
    seeAlso: "test item",
    description: "The component or system to be tested.",
  },
  {
    term: "Test objective",
    description: "A reason or purpose for designing and executing a test.",
  },
  {
    term: "Test oracle",
    ref: "After Adrion",
    synonyms: "oracle",
    description:
      "A source to determine expected results to compare with the actual result of the system under test.",
  },
  {
    term: "Test plan",
    ref: "After ISO 29119",
    description:
      "Documentation describing the test objectives to be achieved and the means and the schedule for achieving them, organized to coordinate testing activities.",
  },
  {
    term: "Test planning",
    description: "The activity of establishing or updating a test plan.",
  },
  {
    term: "Test policy",
    synonyms: "organizational test policy",
    description:
      "A high-level document describing the principles, approach and major objectives of the organization regarding testing.",
  },
  {
    term: "Test procedure",
    ref: "ISO 29119",
    seeAlso: "test script",
    description:
      "A sequence of test cases in execution order, and any associated actions that may be required to set up the initial preconditions and any wrap up activities post execution.",
  },
  {
    term: "Test process",
    description:
      "The set of interrelated activities comprising of test planning, test monitoring and control, test analysis, test design, test implementation, test execution, and test completion.",
  },
  {
    term: "Test process improvement",
    ref: "After CMMI",
    description:
      "A program of activities designed to improve the performance and maturity of the organization's test processes and the results of such a program.",
  },
  {
    term: "Test progress report",
    synonyms: "test status report",
    description:
      "A test report produced at regular intervals about the progress of test activities against a baseline, risks, and alternatives requiring a decision.",
  },
  {
    term: "Test report",
    description: "Documentation summarizing test activities and results.",
  },
  {
    term: "Test reporting",
    seeAlso: "test process",
    description:
      "Collecting and analyzing data from testing activities and subsequently consolidating the data in a report to inform stakeholders.",
  },
  {
    term: "Test schedule",
    description:
      "A list of activities, tasks or events of the test process, identifying their intended start and finish dates and/or times, and interdependencies.",
  },
  {
    term: "Test script",
    seeAlso: "test procedure",
    description: "A sequence of instructions for the execution of a test.",
  },
  {
    term: "Test session",
    seeAlso: "exploratory testing",
    description:
      "An uninterrupted period of time spent in executing tests. In exploratory testing, each test session is focused on a charter, but testers can also explore new opportunities or issues during a session. The tester creates and executes on the fly and records their progress.",
  },
  {
    term: "Test strategy",
    ref: "After ISO 29119",
    synonyms: "organizational test strategy",
    description:
      "Documentation that expresses the generic requirements for testing one or more projects run within an organization, providing detail on how testing is to be performed, and is aligned with the test policy.",
  },
  {
    term: "Test suite",
    synonyms: "test case suite , test set",
    description:
      "A set of test cases or test procedures to be executed in a specific test cycle.",
  },
  {
    term: "Test summary report",
    ref: "ISO 29119",
    synonyms: "test report",
    description:
      "A test report that provides an evaluation of the corresponding test items against exit criteria.",
  },
  {
    term: "Test technique",
    synonyms:
      "test case design technique , test specification technique , test technique , test design technique",
    description: "A procedure used to derive and/or select test cases.",
  },
  {
    term: "Test tool",
    ref: "TMap",
    seeAlso: "CAST",
    description:
      "A software product that supports one or more test activities, such as planning and control, specification, building initial files and data, test execution and test analysis.",
  },
  {
    term: "Test type",
    ref: "After TMap",
    description:
      "A group of test activities based on specific test objectives aimed at specific characteristics of a component or system.",
  },
  {
    term: "Testability",
    ref: "After ISO 25010",
    description:
      "The degree of effectiveness and efficiency with which tests can be designed and executed for a component or system.",
  },
  {
    term: "Testable requirement",
    ref: "After IEEE 610",
    description:
      "A requirement that is stated in terms that permit the establishment of test designs (and subsequently test cases) and execution of tests to determine whether the requirement has been met.",
  },
  {
    term: "Tester",
    description:
      "A skilled professional who is involved in the testing of a component or system.",
  },
  {
    term: "Testing",
    description:
      "The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation, and evaluation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects.",
  },
  {
    term: "Testware",
    ref: "After ISO 29119",
    description:
      "Work products produced during the test process for use in planning, designing, executing, evaluating, and reporting on testing.",
  },
  {
    term: "Traceability",
    ref: "After ISO 19506",
    seeAlso: "horizontal traceability, vertical traceability",
    description:
      "The degree to which a relationship can be established between two or more work products.",
  },
  {
    term: "Understandability",
    ref: "ISO 9126",
    seeAlso: "usability",
    description:
      "The capability of the software product to enable the user to understand whether the software is suitable and how it can be used for particular tasks and conditions of use.",
  },
  {
    term: "Unit test framework",
    ref: "Graham",
    description:
      "A tool that provides an environment for unit or component testing in which a component can be tested in isolation or with suitable stubs and drivers. It also provides other support for the developer, such as debugging capabilities.",
  },
  {
    term: "Unreachable code",
    synonyms: "dead code",
    description:
      "Code that cannot be reached and therefore is impossible to execute.",
  },
  {
    term: "Usability",
    ref: "After ISO 25010",
    description:
      "The degree to which a component or system can be used by specified users to achieve specified goals in a specified context of use.",
  },
  {
    term: "Usability testing",
    ref: "After ISO 25010",
    description:
      "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency, and satisfaction in a specified context of use.",
  },
  {
    term: "Use case",
    description:
      "A sequence of transactions in a dialogue between an actor and a component or system with a tangible result, where an actor can be a user or anything that can exchange information with the system.",
  },
  {
    term: "Use case testing",
    synonyms: "scenario testing , user scenario testing",
    description:
      "A black-box test technique in which test cases are designed to execute scenarios of use cases.",
  },
  {
    term: "User acceptance testing",
    seeAlso: "acceptance testing",
    description:
      "Acceptance testing conducted in a real or simulated operational environment by intended users focusing on their needs, requirements, and business processes.",
  },
  {
    term: "User interface",
    description:
      "All components of a system that provide information and controls for the user to accomplish specific tasks with the system.",
  },
  {
    term: "User story",
    seeAlso: "Agile software development, requirement",
    description:
      "A high-level user or business requirement commonly used in Agile software development, typically consisting of one sentence in the everyday or business language capturing what functionality a user needs and the reason behind this, any non-functional criteria, and also includes acceptance criteria.",
  },
  {
    term: "V-model",
    description:
      "A sequential development lifecycle model describing a one-for-one relationship between major phases of software development from business requirements specification to delivery, and corresponding test levels from acceptance testing to component testing.",
  },
  {
    term: "Validation",
    ref: "ISO 9000",
    description:
      "Confirmation by examination and through provision of objective evidence that the requirements for a specific intended use or application have been fulfilled.",
  },
  {
    term: "Variable",
    description:
      "An element of storage in a computer that is accessible by a software program by referring to it by a name.",
  },
  {
    term: "Verification",
    ref: "ISO 9000",
    description:
      "Confirmation by examination and through provision of objective evidence that specified requirements have been fulfilled.",
  },
  {
    term: "Walkthrough",
    ref: "After ISO 20246",
    seeAlso: "peer review",
    synonyms: "structured walkthrough",
    description:
      "A type of review in which an author leads members of the review through a work product and the members ask questions and make comments about possible issues.",
  },
  {
    term: "White-box test technique",
    synonyms:
      "structural test technique , structure-based test technique , structure-based technique , white-box technique",
    description:
      "A procedure to derive and/or select test cases based on an analysis of the internal structure of a component or system.",
  },
  {
    term: "White-box testing",
    synonyms:
      "clear-box testing , code-based testing , glass-box testing , logic-coverage testing , logic-driven testing , structural testing, structure-based testing",
    description:
      "Testing based on an analysis of the internal structure of the component or system.",
  },
  {
    term: "Wideband Delphi",
    description:
      "An expert-based test estimation technique that aims at making an accurate estimation using the collective wisdom of the team members.",
  },
];
