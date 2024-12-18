import { Hardware } from "@mui/icons-material"

// content for Course detail 
const courseDetails = {
  SOFTWARE: [{
    Title: "Java SE (Standard Edition)",
    Image: "https://t3.ftcdn.net/jpg/02/01/05/22/240_F_201052212_M2wpoRcv9qpysoPtHB8ruwnRekrVkHEx.jpg",
    cardContent: "The Java SE (Standard Edition) course is designed to provide a solid foundation in the Java programming language, enabling students to build robust, platform-independent applications. This course covers the core Java concepts, libraries, and tools essential for developing stand-alone applications, preparing learners for advanced programming in enterprise environments and other Java frameworks.",
    outline: [
      "Introduction to java",
      "Oops concept",
      "Functions modules, interfaces, inheritances & exceptions",
      "Thread",
      "String, collections and files",
      "Databases and JDBC"
    ]
  },
  {
    Title: "C Programming",
    Image: "https://t3.ftcdn.net/jpg/02/03/89/12/240_F_203891226_aX1909jQ0vRJUunAfIH0DcH07BKF1qCS.jpg",
    cardContent: "The C Programming course introduces learners to one of the most powerful and widely used programming languages in software development. As the foundation for many modern programming languages, C provides the essential building blocks for writing efficient, low-level code. This course focuses on developing logical thinking, problem-solving skills, and understanding how memory management works, making it ideal for those looking to get into system programming or embedded development.",
    outline: [
      "Basics of programming and history of C",
      "Data types and variables",
      "Constants and operators",
      "Control structure and function",
      "Pointers and command line arguments ",
      "Structure linked list, file handling and basic graphics"
    ]
  },
  {
    Title: "C++ Programming",
    Image: "https://t4.ftcdn.net/jpg/09/90/60/75/240_F_990607548_QcxX7massY61kMoCHoYKTQPpe6qWQ116.jpg",
    cardContent: "The C++ Programming course provides a comprehensive understanding of one of the most powerful and versatile programming languages used for system, application, and game development. C++ builds upon the foundation of the C language, adding object-oriented programming (OOP) capabilities and advanced features that support low-level programming as well as high-performance applications. This course is ideal for students and professionals who want to master both procedural and object-oriented programming concepts.",
    outline: [
      "Fundamentals of OOP",
      "Basics of C++",
      "Functions, arrays, union, pointers",
      "Classes and objects",
      "Inheritance and polymorphism",
      "File organization, exception handling & pre-processor directives"
    ]
  },
  {
    Title: "Python Programming",
    Image: "https://t4.ftcdn.net/jpg/08/97/41/51/240_F_897415198_4Lgy7C7RAdCu6FDtlNFTs8hTr0kcgiOJ.jpg",
    cardContent: "The Python Programming course is designed to provide a solid foundation in one of the most versatile and popular programming languages. Known for its simplicity and readability, Python is widely used in fields ranging from web development and data science to artificial intelligence and automation. This course is ideal for both beginners and experienced programmers looking to expand their knowledge and career opportunities.",
    outline: [
      "Introduction to Python",
      "Installation & Environment Set up",
      "Program creation and execution",
      "Decision Structures",
      "Loops",
      "Collection Data Types (List, Tuple, Dictionary, Set)",
      "String Manipulation",
      "Functions",
      "Exceptions",
      "Object oriented programming: class, object & inheritance",
      "File Manipulation"
    ]
  },
  {
    Title: "HTML, CSS and JavaScript",
    Image: "https://t3.ftcdn.net/jpg/04/25/50/06/240_F_425500686_9yvFLBYvIwwLp7oc0WyMiuipMVk93pW3.jpg",
    cardContent: "This HTML, CSS, and JavaScript course is designed to introduce learners to the core technologies of web development. HTML structures the content of a webpage, CSS styles it, and JavaScript adds interactivity. Together, these technologies form the foundation for building modern, responsive websites and web applications. This course is ideal for beginners as well as aspiring front-end developers looking to gain hands-on experience in web technologies.",
    outline: [
      "Introduction",
      "Building Blocks of Web Front End ",
      "Introduction to HTML ",
      "Basic HTML Tags ",
      "Advanced HTML Tags",
      "Introduction to CSS ",
      "CSS Basics ",
      "Advanced CSS ",
      "Project",
      "Introduction to Dynamic HTML ",
      "JavaScript Basics ",
      "Advanced JS concepts ",
      "DOM (Document Object Model",
      "Manipulating DOM Using JS ",
      "DOM Events"
    ]
  },
  {
    Title: "React JS",
    Image: "https://t4.ftcdn.net/jpg/07/80/10/17/240_F_780101744_GaRWjrLEXrw3El5M5QkxhvZ2GUDS3DvV.jpg",
    cardContent: "The React JS course provides in-depth knowledge of building dynamic, interactive, and high-performance web applications using React, one of the most popular front-end JavaScript libraries. Developed by Facebook, React focuses on creating reusable components and provides an efficient way to manage user interfaces. This course is ideal for developers aiming to build scalable, modern web applications and become proficient in front-end development.",
    outline: [
      "Introduction",
      "Installation",
      "Features",
      "Advantages & Disadvantages",
      "Architecture",
      "Creating a React Application",
      "JSX",
      "Components",
      "Styling",
      "Properties (Props)",
      "Component Life Cycle",
      "Event Management",
      "State Management",
      "Pagination",
      "Material Ui",
      "Http Client Programming",
      "Form Programming",
      "Conditional Rendering",
      "Lists & Keys",
      "Routing",
      "Redux",
      "Animation & Bootstrap",
      "Maps & Tables",
      "Managing State Using Flux",
      "Testing, Building and Deployment",
      "Project Work",
    ]
  },
  {
    Title: "React Native",
    Image: "https://t3.ftcdn.net/jpg/04/33/86/50/240_F_433865030_lfnsOmrm8tb6TxqjiZw73CaXFDWQKDRv.jpg",
    cardContent: "The React Native course equips learners with the skills needed to build cross-platform mobile applications using a single codebase. Developed by Facebook, React Native allows developers to create apps for both iOS and Android using JavaScript and React. This course is ideal for front-end developers, mobile enthusiasts, and anyone interested in learning how to build native-like mobile apps efficiently.",
    outline: [
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "React native"
    ]
  },
  {
    Title: "Kotlin",
    Image: "https://t4.ftcdn.net/jpg/02/16/22/71/240_F_216227148_C1zrS49c1mjy1wlpaqBgbOOtgozOIRbK.jpg",
    cardContent: "The Kotlin course introduces learners to a powerful, modern, and concise programming language developed by JetBrains. Kotlin is officially supported by Google as the preferred language for Android development and can also be used for backend, web, and multi-platform development. This course is ideal for beginners and experienced developers who want to build Android apps or explore Kotlin’s versatility.",
    outline: [
      " Introduction",
      " Control structures",
      " Arrays, string, functions",
      " OOPS Concept",
      " Android development",
      " connecting android to backend database",
    ]
  },
  {
    Title: "Flutter",
    Image: "https://t3.ftcdn.net/jpg/05/23/24/34/240_F_523243495_2iP7zMxEAU5PdjiOvV902m83QjKIvsQI.jpg",
    cardContent: "The Flutter course provides comprehensive training in building cross-platform mobile applications using Flutter, Google’s UI toolkit. With Flutter, developers can create high-performance, visually appealing apps for Android, iOS, web, and desktop from a single codebase using the Dart programming language. This course is ideal for aspiring mobile app developers and professionals seeking to streamline their development process.",
    outline: [
      "Introduction to android studio",
      "Java deep dive",
      "Android UI",
      "Activities and intents, fragments",
      "Android material design",
      "Networking APIS and JASON",
      "Advanced features",
      "How to debug and publish app to play store",
      "Dart programming",
      "Flutter",]
  },
  {
    Title: "Dart",
    Image: "https://t4.ftcdn.net/jpg/04/19/05/01/240_F_419050146_DDOOZ8FRtjx0KLt4Sekxk1W0YaNgkIbo.jpg",
    cardContent: "The Dart course provides a solid foundation in Dart, the programming language developed by Google. Dart is known for being the primary language behind Flutter, a popular framework for building cross-platform mobile, web, and desktop applications. This course will teach learners the syntax, concepts, and advanced features of Dart, preparing them for both Flutter development and other standalone applications using Dart.",
    outline: [
      "Dart Programming: Introduction",
      "Syntax and data type",
      "Variables, operators and loops",
      "Decision making",
      "Strings, Boolean, map, class, arrays and functions",
      "Dart enumeration",
      "Object oriented programming",
    ]
  },
  {
    Title: "Django",
    Image: "https://t3.ftcdn.net/jpg/07/49/20/64/240_F_749206438_zj2hemjtPNz6g9PR9Tq9xWTI4aDphed2.jpg",
    cardContent: "The Django course offers an in-depth exploration of Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design. Ideal for beginners and experienced developers alike, this course equips learners with the skills needed to build powerful, secure, and scalable web applications efficiently."
  }
  ],
  ACCOUNTING: [
    {
      Title: "Tally Prime",
      Image: "",
      cardContent: "The Tally Prime Course equips participants with essential skills to manage accounting, taxation, and payroll efficiently using Tally Prime, one of the most popular accounting software tools. This course covers all aspects of financial management, from bookkeeping to generating reports, making it ideal for students, accountants, and business owners. With hands-on practice, learners will gain the expertise to streamline business operations, manage GST compliance, and produce financial reports accurately."
      ,
      outline: [
        "Introduction To Tally Prime",
        "Working Tally Prime In Educational Mode",
        "Maintaining Chart Of Accounts ",
        "Recording And Maintaining Accounting Transactions",
        "Banking",
        "Generating Financial Statements And Mis Reports",
        "Data Security",
        "Company Data Management",
        "Storage And Classification Of Inventory",
        "Accounts Receivable And Payable Management",
        "Purchase And Sales Order Management",
        "Sales Order Processing",
        "Order Outstanding",
        "Reorder Level",
        "Budgets And Scenarios",
        "Generating & Printing Reports",
      ]
    },
    {
      Title: "Sage 50",
      Image: "",
      cardContent: "The Sage 50 Course provides participants with comprehensive knowledge of Sage 50 Accounting Software, a leading solution for small and medium-sized enterprises (SMEs). This course equips learners with the essential skills required to manage finances, inventory, payroll, and tax compliance efficiently. With hands-on training, students will gain expertise in bookkeeping, financial reporting, and business analysis, helping businesses streamline operations and make informed financial decisions."
      ,
      outline: [
        "IT BASICS & WINDOWS ",
        "MS OFFICE FUNDAMENTALS ",
        "BASIC ACCOUNTING (MANUAL) ",
        "SAGE 50 ACCOUNTING ",
        "SAGE 50 PRACTICE SESSION",
      ]
    },
    {
      Title: "QuickBooks",
      Image: "",
      cardContent: "The QuickBooks Course is designed to provide participants with practical knowledge of QuickBooks, one of the most popular accounting software solutions for small and medium-sized businesses (SMBs). This course equips learners with the skills to manage day-to-day financial operations, including bookkeeping, invoicing, payroll, and tax filing. With hands-on training, participants will gain expertise in organizing finances, tracking income and expenses, and generating insightful reports, making it ideal for aspiring accountants, business owners, and finance professionals."
      ,
      outline: [
        "IT BASICS & WINDOWS ",

        "MS OFFICE FUNDAMENTALS",
        "BASIC ACCOUNTING (MANUAL) ",
        "QUICKBOOKS ACCOUNTING ",
        "QUICKBOOKS FINAL ACTIVITY SESSION",

      ]
    },
    {
      Title: "DIFA",
      Image: "",
      cardContent: "The Diploma in Financial Accounting (DIFA) course is designed to equip participants with a solid foundation in accounting principles, practices, and financial reporting. This course covers essential topics in financial accounting, preparing students for a successful career in finance, accounting, or business management. Through practical exercises and real-world applications, learners will develop the skills needed to manage financial records, prepare financial statements, and understand accounting regulations."
      ,
      outline: [
        "IT BASICS & WINDOWS ",
        "MS OFFICE ",
        "BASIC ACCOUNTING (MANUAL) ",
        "TALLY ESSENTIAL COMPREHENSIVE 72 D/108 H",
        "SAGE 50 ",
        "QUICKBOOKS ",
        "E-ACCOUNTING ",
      ]
    },
    {
      Title: "Professional Diploma in Financial Accounting (PDIFA) ",
      Image: "",
      cardContent: "The Professional Diploma in Financial Accounting (PDIFA) is an advanced course designed to provide participants with in-depth knowledge and practical skills in financial accounting. This course focuses on key concepts, principles, and practices necessary for effective financial management and reporting in various business environments. Ideal for finance professionals seeking to enhance their career prospects, the PDIFA combines theoretical understanding with practical applications, enabling students to excel in accounting roles."
      ,
      outline: [
        "IT BASICS & WINDOWS ",
        "MS OFFICE ",
        "BASIC ACCOUNTING (MANUAL) ",
        "TALLY ESSENTIAL COMPREHENSIVE ",
        "SAGE 50 ",
        "QUICKBOOKS ",
        "E-ACCOUNTING ",
        "FINANCE MANAGEMENT BASICS _ THEORY",
        "SAP FICO POWER USER ",
      ]
    },
    {
      Title: "SAP MM",
      Image: "",
      cardContent: "The SAP MM (Material Management) course is designed to provide participants with a comprehensive understanding of the material management module within SAP ERP. This course covers the processes involved in procurement, inventory management, and logistics, equipping learners with the skills needed to effectively manage materials and optimize supply chain operations. Ideal for professionals in logistics, supply chain management, and procurement, this course focuses on both theoretical concepts and practical applications within the SAP MM environment."
      ,
      outline: [
        "SAP BASICS",
        "SAP Hana MM – Enterprise Structure",
        "Master Data – Vendor Creation",
        "Master Data – Customer Creation",
        "Master Data – Service Master",
        "Master Data – Material Master",
        "Other Master Data’s",
        "Procurement – P2P Cycle",
        "Special Procurements",
        "Inventory Management",
        "Integration to Other Modules",
        "Material Ledger Activation in S/4 HANA?",
        "Real Time Concepts",

      ]
    },
    {
      Title: "SAP SD",
      Image: "",
      cardContent: "The SAP SD (Sales and Distribution) course provides participants with a comprehensive understanding of the sales and distribution processes within the SAP ERP system. This course covers the entire sales lifecycle, from order management to delivery and billing, equipping learners with the skills needed to effectively manage sales processes and customer relationships. Ideal for professionals in sales, logistics, and supply chain management, the SAP SD course emphasizes both theoretical knowledge and practical applications."
      ,
      outline: [
        "SAP BASICS",
        "SAP Hana SD – Enterprise Structure",
        "Master Data – Vendor Creation",
        "Master Data Management – Customer Creation",
        "Other Master Data – Material Master",
        "Sales Documents",
        "Contracts and Special Processes",
        "Sales and Distribution basic Functions",
        "Available to promise and Transfer of Requirements",
        "Logistics Execution Process",
        "Billing",
        "Pricing",
        "Real Time Concept",
      ]
    },
    {
      Title: "SAP PP",
      Image: "",
      cardContent: "The SAP PP (Production Planning) course is designed to provide participants with a comprehensive understanding of the production planning and control processes within the SAP ERP system. This course covers key topics related to planning, scheduling, and managing production operations effectively. Ideal for professionals in manufacturing, operations, and supply chain management, the SAP PP course emphasizes both theoretical concepts and practical applications to optimize production processes."
      ,
      outline: [
        "SAP BASICS",
        "SAP PP Process Flow and Process",
        "Methodology",
        "User Interface",
        "Enterprise Structure for PP",
        "Product Costing",
        "PP end to End Process with GUI",
        "PP Master DATA",
        "Backflush and Auto GR",
        "Demand Management with Classis",
        "MRP vs MRP Live",
        "Integration to Other Modules",
        "Requirement Planning",
      ]
    },
    {
      Title: "SAP FICO",
      Image: "",
      cardContent: "The SAP FICO (Financial Accounting and Controlling) course is designed to provide participants with a comprehensive understanding of the integrated financial management capabilities within the SAP ERP system. This course covers essential components of financial accounting (FI) and controlling (CO), equipping learners with the skills needed to manage financial transactions, reporting, and internal controls effectively. Ideal for finance professionals, accountants, and SAP consultants, this course emphasizes both theoretical concepts and practical applications."
      ,
      outline: [
        "INTRODUCTION TO EPR",
        "ERP MODULES",
        "INTRODUCTION TO FICO – (FINANCE",
        "AND CONTROLLING) MODULE",
        "ENTERPRISE STRUCTURE",
        "FINANCIAL ACCOUNTING GLOBAL",
        "SETTINGS",
        "GENERAL LEDGER",
        "ACCOUNTS PAYABLE",
        "ACCOUNTS RECEIVABLE",
        "ASSET ACCOUNTING",
        "SAP – FICO",
        "SAP BASICS",
        "SAP HANA FINANCE – ENTERPRISE STRUCTURE",
        "COMPANY CODE GLOBAL PARAMETERS",
        "FINANCIAL ACCOUNTING GLOBAL SETTINGS",
        "TOLERANCE GROUPS",
        "SAP HANA FI – GENERAL LEDGER ACCOUNTING",
        "SAP HANA FI – CURRENCY",
        "SAP HANA FI – DOCUMENTS POSTING",
        "SAP HANA FI – ACCOUNTS PAYABLE",
        "SAP HANA FI – ACCOUNTS RECEIVABLE",
        "SAP HANA FI – BUSINESS PARTNERS",
        "BANK ACCOUNTING",
        "SAP HANA FI – TAX",
        "SAP HANA FI – ASSET ACCOUNTING",
        "CONTROLLING & COST ELEMENT ACCOUNTING",
        "HOW TO ACTIVATE MATERIAL LEDGER IN S/4 HANA?",
        "REAL TIME CONCEPTS"
      ]
    },
    {
      Title: "CCNA",
      Image: "",
      cardContent: "The CCNA (Cisco Certified Network Associate) course is designed to provide participants with foundational knowledge and skills in networking, enabling them to effectively configure, manage, and troubleshoot networks. This course covers a wide range of topics, including network fundamentals, IP addressing, routing and switching, and security. Ideal for aspiring network professionals, IT support staff, and anyone looking to enhance their networking skills, the CCNA course combines theoretical concepts with hands-on practical experience."
      ,
      outline: []
    },
  ],
  "CADD CIRCLE": [
    {
      Title: "AUTOCAD 2D",
      Image: "",
      cardContent: "The AutoCAD 2D course is designed to equip students and professionals with the skills to create precise technical drawings using AutoCAD, one of the world\u2019s leading design software tools."
      ,
      outline: [
        "Introduction to Engineering Drawings",
        "Introduction to AutoCAD",
        "File Management",
        "Drawing & Drafting settings",
        "Drawing Tools",
        "Modify Tools",
        "Display Control",
        "Object Properties",
        "Layer Management",
        "Annotation Tools",
        "Hatching Objects",
        "Object Selection Methods",
        "Parametric Modeling",
        "Isometric View Drawings",
        "external references",
        "Layout plot and publish",
      ]
    },
    {
      Title: "AutoCAD 3D Course",
      Image: "",
      cardContent: "The AutoCAD 3D course is designed to provide participants with advanced skills in 3D modeling and visualization using AutoCAD software. This course enables students to create precise 3D designs, making it ideal for professionals in architecture, engineering, product design, and construction. Through practical exercises and real-world projects, learners will gain expertise in transforming 2D drawings into complex 3D models for presentation and analysis."
      ,
      outline: [
        "Understanding the autodesk civil 3D interface ",
        "Project management ",
        "Parcels ",
        "Survey ",
        "surfaces ",
        "Breaklines and boundaries ",
        "Alignments ",
        "Profiles ",
        "Corridor ",
        "Grading ",
        "Pipe networks ",
        "Quantity takes off section ",
        "Plan production",
      ]
    },
    {
      Title: "REVIT(CADD CIRCLE)",
      Image: "",
      cardContent: "The Revit Certification Course is designed to provide students and professionals with expertise in Building Information Modeling (BIM), using Autodesk Revit. This course focuses on creating intelligent 3D models for architecture, structural engineering, and construction, enabling participants to design, visualize, and manage building projects efficiently. With a mix of theory and practical sessions, students will develop the skills needed to work on real-world projects and collaborate effectively across disciplines."
      ,
      outline: []
    },
    {
      Title: "Primavera",
      Image: "",
      cardContent: "The Primavera P6 Course is designed to provide participants with in-depth knowledge of Oracle\u2019s Primavera P6 software, the industry standard for project management, planning, and scheduling. This course focuses on mastering essential project management concepts, including activity planning, resource management, scheduling, and risk analysis, making it ideal for professionals in construction, engineering, manufacturing, and IT sectors. With hands-on practice, participants will learn to create, manage, and control projects efficiently to meet deadlines and budgets."
      ,
      outline: [
        "Getting started with primavera P6",
        "Scheduling in Primavera ",
        "Resource management in primavera ",
        "Cost management primavera ",
        "Essential activity coding in primavera ",
        "Baselines in primavera ",
        "Progress updating in primavera ",
        "Advanced P6 tutorial in excel ",
      ]
    },
    {
      Title: "Tekla Structures",
      Image: "",
      cardContent: "The Tekla Structures Course provides participants with comprehensive knowledge of Building Information Modeling (BIM) for structural design and detailing. Tekla Structures is an industry-leading software for designing and managing steel and concrete structures, offering powerful tools for creating accurate, constructible models. This course prepares learners to develop detailed 3D models, generate fabrication drawings, and collaborate across disciplines, making it ideal for engineers, architects, and construction professionals."
      ,
      outline: []
    },
    {
      Title: "SOFTWARE TESTING(SOFTWARE)",
      Image: "",
      cardContent: "This course provides a comprehensive introduction to [Software Name \/ Technology], designed to equip participants with the skills needed to use and apply it effectively in real-world scenarios. Whether you are a beginner or someone with prior experience, this course will help you build a solid foundation and develop practical expertise."
    }
  ],
  "NETWORKING AND HARDWARE": [
    {
      Title: "A+",
      Image: "",
      cardContent: "The CompTIA A+ certification is widely recognized as an essential starting point for anyone pursuing a career in IT. This course covers a broad range of technical skills, including networking fundamentals, hardware troubleshooting, operating system support, security protocols, and cloud computing. The program emphasizes practical problem-solving and hands-on experience to prepare students for roles such as IT support specialists, help desk technicians, and junior system administrators."
      ,
      outline: [
        "A+ CORE 1 (220-1101) ",
        "A+ CORE 2 (220-1102)",
      ]
    },
    {
      Title: "  N+ ",
      Image: "",
      cardContent: "The Cisco Certified Network Associate (CCNA) certification is an entry-level networking credential designed to validate fundamental networking knowledge and skills. As of August 2024, Cisco introduced updates under CCNA version 1.1, aligning the certification with current industry trends such as AI, cloud technologies, and network automation."
      ,
      outline: [
        " Physical Network Topologies",
        " Topology Selection, Backbones, and Segments",
        " Cable Properties",
        " Wiring Standards",
        " Installing Wiring Distributions MDF/IDF",
        "IP Terminology",
        " The Hierarchical IP Addressing Scheme",
        " IPv4 Address Types",
        " Internet Protocol Version 6 (IPv6)",
        "Networking Before Layer 2 Switching",
        " Switching Services",
        " Spanning Tree Protocol",
        " Virtual LANs",
        " VLAN Trunking Protocol",
        " Two Additional Advanced Features of Switches",
        "Protocol Analyzers",
        " Throughput Testers",
        " Connectivity Software",
        " Using traceroute",
        " Using the ping Utility",
        " Using the Address Resolution Protocol",
        " Using the nslookup Utility",
        " Resolving Names with the Hosts Table",
        " Using the Mtr Command (pathping)",
        " Using the route Command",
        " Using the nbtstat Utility",
        " Using the netstat Utility",
        "Using tcpdump",
        "Using the File Transfer Protocol",
        " Using the Telnet Utility",
      ]
    },
    {
      Title: "ETHICAL HACKING ",
      Image: "",
      cardContent: "An Ethical Hacking course is designed to teach students the methods used by hackers to exploit vulnerabilities in networks and systems, but with the goal of securing them. Below is a detailed overview of what you can expect from such courses:"
      ,
      outline: [
        "Information security Fundamentals",
        "Hardware Fundamentals",
        "Networking Fundamentals",
        "Secure network protocols",
        "Information security Threats and attacks",
        "Social engineering",
        "Hacking cycle",
        "Identification, Authentication and authorization",
        "Cryptography",
        "Firewalls",
        "Intrusion detection system",
        "Data backup",
        "Virtual private network",
        "Wireless network security",
        "Web security",
        "Ethical hacking and Pen testing",
      ]
    },

    {
      Title: "LINUX ",
      Image: "",
      cardContent: "A Linux course typically focuses on helping learners understand the fundamentals of the Linux operating system, from basic navigation to more advanced administration skills. The course covers both command-line and graphical interfaces, allowing students to interact with different Linux distributions."
      ,
      outline: []
    },
    {
      Title: "RED HAT ",
      Image: "",
      cardContent: "Red Hat courses are crafted to build deep expertise in Linux system administration and open-source technologies. Core offerings cover essential skills like system configuration, network management, and security practices. Advanced modules dive into automation using Ansible, containerization with Podman and Kubernetes, and cloud infrastructure management. Hands-on labs and real-world scenarios ensure participants can apply their skills effectively. Red Hat certifications, widely recognized in the industry, validate expertise and open up career opportunities in IT administration and development."
      ,
      outline: [
        "Installing Red Hat Enterprise Linux Server",
        "Using Essential Tools",
        "Essential File Management Tools",
        "Working with Text Files",
        "Connecting to Red Hat Enterprise Linux 7",
        "User and Group Management",
        "Configuring Permissions",
        "Configuring Networking",
        "Managing Processes",
        "Working with Virtual Machines",
        "Managing Software",
        "Scheduling Tasks",
        "Configuring Logging",
        "Managing Partitions",
        "Managing LVM Logical Volumes",
        "Basic Kernel Management",
        "Configuring a Basic Apache Server",
        "Managing and Understanding the Boot Procedure",
        "Troubleshooting the Boot Procedure",
        "Using Kickstart",
        "Managing SELinux",
        "Configuring a Firewall",
        "Configuring Remote Mounts and FTP",
        "Configuring Time Services",
        "Configuring an iSCSI SAN",
        "System Performance Reporting",
        "System Optimization Basics",
        "Configuring Advanced Log Features",
        "Configuring Routing and Advanced Networking",
        "An Introduction to Bash Shell Scripting",
        "Advanced Firewall Configuration",
        "Managing Advanced Apache Services",
        "Configuring DNS",
        "Configuring a MariaDB Database",
        "Configuring NFS",
        "Configuring Samba File Services",
        "Setting Up an SMTP Server",
        "Configuring SSH",
        "Managing Time Synchronization",
      ]
    },
    {
      Title: "CERTIFIED ETHICAL HACKING ",
      Image: "",
      cardContent: "The Certified Ethical Hacking (CEH) course trains participants to think like hackers to improve security. Key topics include hacking fundamentals, intelligence gathering, network and system vulnerabilities, malware analysis, web application threats, wireless security, cryptography, and securing cloud and IoT environments, offering a comprehensive approach to modern cybersecurity.",
      outline: []
    }

  ]

}

//content for Home page image slide
const homeDisplayImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGSrpkzspU3HChRWdKRWMrGd6g9po90HWl3cfBL2DAKghkG9deZvH_ysHvMMfkAKcX1k&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoE_LXbqxrTSmD4tuGP8vr-tJpqbkIH50vQ&s",
  "https://www.trodly.com/pictures/attraction/x3341.jpg.pagespeed.ic.QoqV_wqpAV.jpg",
  "https://th-i.thgim.com/public/incoming/g96bi9/article68417939.ece/alternates/FREE_1200/NPBVR_16-2-2012_19-1-2_MAYILADUTHURAIRAILWAYSTATION06.JPG"
]

//content for Offer
const DetailForOffer = [
  "/public/bg.jpg",
  "/public/bg.jpg"
]
//content for affilication
const affilication = [
  { name: "The COUNCIL for PRIVATE EDUCATION", img: "https://media.licdn.com/dms/image/v2/C560BAQHRihwY29NT4w/company-logo_200_200/company-logo_200_200/0/1632466237483/council_for_private_education_logo?e=2147483647&v=beta&t=oUi5b0q0tM-q4-8fPD8-MTGPouP2DBhwv33rue9S5Gs", content: "G-TEC is registered with The COUNCIL for PRIVATE EDUCATION (Govt: of Singapore) (CPE)", },
  { name: "HRDF Malaysia", img: "https://blog.bcm-institute.org/hubfs/HRD%20Corp%20Logo/HRD%20Corp%20Logo%2002.png", content: "G-TEC is approved by HRDF Malaysia (Human Resources Development Fund)", },
  { name: "Vocational Training Partner", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUL0PTnzDxzst-bMwxXKqCozOIWpoI3mZlzw&s", content: "G-TEC is an Authorized Vocational Training Partner for Government courses (VTP)", },
  { name: "The National Institute of Open Schooling", img: "https://www.outreachindia.net/img/aut.jpg", content: "G-TEC is an Authorized Vocational Institute of MHRD for NIOS program (AVI)", },
  { name: "National Skill Development Corporation (NSDC)", img: "https://skilleducationhub.com/wp-content/uploads/2024/02/NSDC-Preview-1.png", content: "G-TEC is an Authorized Training Service Provider for (NSDC) for Multimedia courses under Media and Entertainment Skills Council. Govt: of India", },
  { name: "RASCI (Retailers Association's Skill Council of India)", img: "https://pbs.twimg.com/profile_images/1560197301464731649/QcYBFKJl_400x400.jpg", content: "G-TEC is an Authorized Training Partner under the skilling Mission of Govt: of India (NSDC) for RASCI (Retailers Association's Skill Council of India)", },
  { name: "Keltron", img: "https://ssg.kec.keltron.org/images/02.png", content: "G-TEC is an Authorized Training Partner of Keltron (KATP) Govt: of India", },
  { name: "ISO", img: "https://media.istockphoto.com/id/942287864/fr/vectoriel/version-nouvelle-de-la-marque-de-certification-iso-9001-2015.jpg?s=612x612&w=0&k=20&c=Xed3EtxsZXXJUDAfpKEt1VrgVBKCUGk-5kxl9k3s470=", content: "G-TEC is an ISO Certified Computer Education Network", },
  { name: "SAP", img: "https://hamradio.my/wp-content/uploads/2024/06/SAP-ERP.webp", content: "G-TEC is an Authorized Training Partner of SAP (Germany)", },
  { name: "Adobe Creative Technology Academy (USA)", img: "https://www.adobe.com/content/dam/cc/us/en/products/aftereffects/max2022/dt_Ae_Rvrflw4-700x525.jpg", content: "G-TEC is an Adobe Creative Technology Academy (USA)", },
  { name: "IBM", img: "https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg", content: "G-TEC is an Authorized Training Partner of IBM (USA)", },
  { name: "EC Council", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7H3tz-Xg_NIkOZZ2LSHX8woxuUK7Fvo_TA&s", content: "G-TEC is an Authorized Training Partner of EC Council (USA)", },
  { name: "IIBI", img: "https://biifbd.org/wp-content/uploads/2023/09/3.png", content: "G-TEC is an Authorized Training Partner of IIBI (UK)", },
  { name: "IAB", img: "https://www.iabuk.com/sites/default/files/styles/company_logo_280x280/public/company_logo/iab-logo-black.png?itok=198kmuvS", content: "G-TEC is an accredited Training provider of IAB (U.K)", },
  { name: "ABE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcQ3bpD4dx-G18JBPT5vYLVXADdsBH-pQ4kOeaoTn8OFWwnmLe8gXE6eC8bBmnUA9Yss&usqp=CAU", content: "G-TEC is an accredited Training provider of ABE (U.K)", },
  { name: "BCS", img: "https://media.licdn.com/dms/image/v2/D4E0BAQGv2S2wsI-kMQ/company-logo_200_200/company-logo_200_200/0/1719823969665/it_bcs_logo?e=2147483647&v=beta&t=DICT4QJEck0kkRCgSqQPbdy_IKXe4vaUaTfLW82YQCQ", content: "G-TEC is an accredited Training provider of BCS (U.K)", },
  { name: "ABP", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBJTCn57F3DXPTkkOPcfwJZJaXpPH-_J9WA&s", content: "G-TEC is an accredited Training provider of ABP (U.K.)", },
  { name: "Adobe Creative Technology Academy (Ireland)", img: "https://149614793.v2.pressablecdn.com/wp-content/uploads/2023/09/Adobe-Creative-Cloud.png", content: "G-TEC is an Adobe Creative Technology Academy (Ireland)", },
  { name: "DOD", img: "https://securityonscreen.com/wp-content/uploads/2021/03/web-21.jpg", content: "G-TEC is authorized to provide SCP Certification on Network Security approved by DOD, U.S.A", },
  { name: "PROMETRIC (Microsoft)", img: "https://pbs.twimg.com/profile_images/472163353486303232/UbHk9Gas_400x400.png", content: "G-TEC is a Testing Centre of PROMETRIC (Professional exams including Microsoft and other 35 renowned International clients)", },
  { name: "CERTIPORT", img: "https://www.itpt.co.uk/wp-content/uploads/2022/03/certiport@2x.png", content: "G-TEC also gives Microsoft Office Specialist Certification (MOS 2003, 2007 and 2010), in three levelsnamely Specialist, Expert and MMI through CERTIPORT", },
  { name: "IC3", img: "https://w7.pngwing.com/pngs/232/86/png-transparent-ic3-professional-certification-digital-literacy-test-computer-text-computer-logo-thumbnail.png", content: "G-TEC provides the certifications of Internet and Computing Core Certification (IC3), UK", },
  { name: "COREL", img: "https://download.logo.wine/logo/Corel/Corel-Logo.wine.png", content: "G-TEC provides COREL CORPORATION certifications for multimedia", },
  { name: "Adobe Certified Associate (ACA)", img: "https://www.ubt-uni.net/wp-content/uploads/2019/02/Adobe-Associate.jpg", content: "G-TEC is an Adobe Exam provider to conduct Adobe Certified Associate (ACA)", },
  { name: "CompTIA", img: "https://static.wixstatic.com/media/fd4a1c_67c710ea0c6a435da0b30d551562a157~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd4a1c_67c710ea0c6a435da0b30d551562a157~mv2.png", content: "G-TEC is a member of CompTIA for A+ N+ certifications", },
  { name: "ICDL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNxItDpxtSx1kRcZ3cdJh1ix_NOPDPWXEOw&s", content: "G-TEC is the Provider of ICDL certification program of International Computer Union", },
  { name: "NIELIT", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pNIP7W7MLre7x-vca81dq-javkQZ9XFZqA&s", content: "G-TEC is an Authorized Training & Testing Centre of NIELIT (old DOEACC) skilled program (DSCS) (Ministry of Communication and Information Technology – Government of India)", },
  { name: "Interlingua", img: "", content: "G-TEC Provides 'G-English' i.e. communicative English to enhance international competency to place our students in international levels with Interlingua. (Italy and UK)", },
  { name: "TOEFL & ETS", img: "https://images.prothomalo.com/prothomalo-english%2F2024-05%2F15e20793-8c02-4c5e-b19a-6e9e7282095d%2Fa2.jpeg?auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480", content: "G-TEC is also authorized to provide Personal Development (PD) program and International competency Test for TOEFL, Employability Tests, through ETS", },
  { name: "Madras University", img: "https://i0.wp.com/lawbhoomi.com/wp-content/uploads/2023/11/University-of-Madras.jpg?fit=600%2C400&ssl=1", content: "G-TEC is an Authorized Training Partner of Madras University as a Participatory Unit", },
  { name: "Calicut University", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluVVEZCCYsBuDXzYsbXhyw49iuOeGi_luRPgNdoBNWu7NiLt7sAElj8ofEQ9T5rv1ohY&usqp=CAU", content: "G-TEC is an Authorized Training Partner of Calicut University as a Counselling Centre", },
  { name: "PRIST University", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmko5IyL9hDSIRyNOQhwRi_kLQICHvg2-FsAh45_nbftn2WpT3jfOJhccjAjAtor7Hzcc&usqp=CAU", content: "G-TEC provides University certificates for 14 courses in Software, Hardware and multimedia in UG and PG in a Collaborative Program with PRIST University, Tamil Nadu", },
  { name: "IT and ICT industry", img: "", content: "Several Certifications from the renowned organizations from U.K and U.S.A makes our crown more beautiful which is more useful in the IT and ICT industry", },
]
// content for testimonial
const testimonial = [
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test1 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test2 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test3 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test4 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test1 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test2 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test3 Video" },
  { Url: "https://player.vimeo.com/video/1023645268?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", Title: "Test4 Video" },
]

const CenterArea = "Mayiladuthrai"
const DirectorName = "Ramya"
const DirectorSlogan = "\"We provide a quality education with result oriented approach. In G-TEC we emphasize on practical approach to bring out the best.We are fully equipped with technology to train our students to compete in ever changing competitive world.\" "
const mainNumber = "9788884850"
const subNumber = "8056338566"
const mailId = "mayiladuthurai.tn@gteceducation.com"
const address = "Nazeem Complex, near to Bus Stand, Gandhi Nagar, Koranad, Mayiladuthurai, Tamil Nadu 609001"
const headerContent = "The Education You Want The Attention You Deserve"
const MapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1404837938107!2d79.64809447590088!3d11.102906053085135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5521004ca2cd8d%3A0x679ab0e9e9030c09!2sG-TEC%20COMPUTER%20EDUCATION%20MAYILADUTHURAI!5e0!3m2!1sen!2sin!4v1729335303812!5m2!1sen!2sin"
const GoogleReviewToken = "a6937548-a640-49ff-9ffd-bcbf3ee74fc1"
const show = true
const keys = Object.keys(courseDetails)
const datas1 = Object.keys(courseDetails).map((i) => courseDetails[i])
let datas = []
for (var s of datas1) {
  for (var j of s) {
    datas = [...datas, j]
  }
}
const userId = "wqho-LxL2pFDmpI3G"
const EmailServiceId = "service_wa803fn"
const FormTemplateForApplicatonForm = "template_1n1seis"
const FormTemplateForEnquiryForm = "template_1n1seis"
const FormTemplateForPlacementForm = "template_b7o68k9"


const AboutUsContent = "GTEC Computer Education in Mayiladuthurai is dedicated to empowering students with high-quality, career-oriented IT education. We offer a broad range of courses in areas like computer science, software development, networking, cybersecurity, and digital skills tailored to meet industry standards. Our experienced instructors provide hands-on training to ensure students gain practical expertise and confidence. At GTEC Mayiladuthurai, we believe in creating an inclusive, supportive environment where students can grow and achieve their career goals in the rapidly advancing tech world. Join us to build a strong foundation for a successful future in technology!"

export { courseDetails, datas, keys, show, homeDisplayImages, DetailForOffer, affilication, DirectorName, DirectorSlogan, mainNumber, subNumber, headerContent, CenterArea, MapLink, GoogleReviewToken, mailId, address, userId, EmailServiceId, FormTemplateForApplicatonForm, FormTemplateForEnquiryForm, FormTemplateForPlacementForm, testimonial, AboutUsContent }