/* Case studies distilled from Ridham Sonani's supplied project documentation. */
window.portfolioProjects = [
  {
    id: 'cultural-heritage', title: 'Making history a conversation.', name: 'Cultural Heritage Chatbot', client: 'Library of Congress collections', group: 'cic', category: 'GraphRAG · Cultural heritage', art: 'heritage', featured: true,
    summary: 'A conversational window into early American history. Connecting historical documents, people, and events through citation-backed AI.',
    tags: ['Amazon Bedrock', 'GraphRAG', 'Neptune Analytics', 'Next.js'],
    problem: 'Historical research requires more than matching keywords. Readers need to understand the relationships between people, legislation, places, and events across Congressional bills and historical newspapers.',
    role: 'Worked on the cloud-native historical research prototype through ASU’s AI Cloud Innovation Center. The project combined conversational search, ingestion orchestration, graph-enhanced retrieval, a web interface, and infrastructure automation.',
    built: ['Natural-language exploration of approximately 60,000 historical documents, with citations linking to original sources.', 'Four response personas: interested person, policy analyst, research journalist, and law student.', 'GraphRAG retrieval using Bedrock Knowledge Base and Neptune Analytics to connect entities and documents.', 'Session context through AgentCore Memory, plus English and Spanish support.'],
    flow: ['Next.js / Amplify', 'API Gateway', 'Lambda + memory', 'Bedrock + Neptune', 'Answer + sources'],
    decision: 'Kept long-running ingestion separate from interactive chat. ECS Fargate collects and transforms the historical corpus while Lambda handles requests, allowing the two paths to scale and operate independently.',
    challenge: 'Large document collections and vague follow-up questions required different strategies. Direct ingestion addressed the newspaper sync limit, while conversation memory and query refinement helped preserve context between turns.',
    outcome: 'Delivered a documented, cloud-native prototype for exploring historical material with persona-aware answers, source attribution, and relationship discovery.',
    stack: ['Next.js', 'React', 'Python', 'AWS CDK', 'Lambda', 'API Gateway', 'Amazon Bedrock', 'Neptune Analytics', 'AgentCore Memory', 'ECS Fargate', 'S3', 'Textract']
  },
  {
    id: 'blood-centers', title: 'Clear answers. A meaningful cause.', name: 'America’s Blood Centers AI Chatbot', client: 'America’s Blood Centers', group: 'cic', category: 'Conversational AI · Community health', art: 'blood',
    summary: 'Helping people navigate blood donation with bilingual, source-backed answers and automatically refreshed information.',
    tags: ['React', 'Bedrock', 'Lambda', 'Step Functions'],
    problem: 'Donation eligibility, procedures, and blood supply information were distributed across PDFs and web pages. Potential donors needed an easier way to find reliable information and verify its source.',
    role: 'Contributed as a full-stack and cloud developer, focusing on backend architecture, AWS integrations, CDK infrastructure, Lambda chat logic with streaming, knowledge base configuration, deployment, admin features, and frontend development. Collaborated with a UI/UX designer.',
    built: ['English and Spanish chat with language persistence and source citations.', 'Streaming responses through a Lambda Function URL using Server-Sent Events.', 'Cognito-protected administration for conversation monitoring and data-source synchronization.', 'Scheduled refreshes with EventBridge and sequential synchronization with Step Functions.'],
    flow: ['React / Amplify', 'Lambda streaming', 'Bedrock Knowledge Base', 'OpenSearch + S3', 'Cited answer'],
    decision: 'Separated PDFs, website content, and daily updates into distinct data sources. Each source can be refreshed on its own schedule, and sequential orchestration avoids overlapping ingestion jobs.',
    challenge: 'Complex documents included tables and multi-column layouts. Bedrock Data Automation supported multimodal parsing, while Step Functions handled sync jobs that could outlast Lambda’s execution limit.',
    outcome: 'Delivered a bilingual assistant, admin dashboard, automated refresh workflow, and reproducible CDK deployment with handoff documentation.',
    stack: ['React', 'Material-UI', 'TypeScript', 'Python', 'Node.js', 'Lambda', 'Amazon Bedrock', 'OpenSearch Serverless', 'DynamoDB', 'Cognito', 'EventBridge', 'Step Functions', 'AWS CDK']
  },
  {
    id: 'open-earth', title: 'A clearer picture of our planet.', name: 'Open Earth Forest Classification', client: 'Open Earth Foundation', group: 'cic', category: 'Geospatial systems · Climate', art: 'earth',
    summary: 'Turning a geographic boundary and satellite imagery into land-use maps and downloadable area statistics.',
    tags: ['Python', 'Google Earth Engine', 'AWS Lambda', 'React'],
    problem: 'Open Earth Foundation needed an automated way to calculate land usage across forests, croplands, grasslands, wetlands, settlements, and other land for environmental analysis.',
    role: 'Worked on backend development, cloud architecture, geospatial processing, AWS integration, testing, and documentation through the ASU AI Cloud Innovation Center.',
    built: ['GeoJSON boundary uploads and date-range selection through a React interface.', 'Satellite-data analysis using Google Earth Engine, Dynamic World, and Sentinel-2.', 'Land-use area calculations in square kilometers, a classified map image, and JSON downloads.', 'A natural forest layer formed by intersecting tree cover with protected-area data from WDPA.'],
    flow: ['GeoJSON + dates', 'S3 upload', 'Python / Lambda', 'Earth Engine', 'Map + JSON in S3'],
    decision: 'Used Google Earth Engine’s existing geospatial computation and datasets instead of training a new classifier. Lambda orchestrates the workflow, while S3 holds the inputs and generated artifacts.',
    challenge: 'Geospatial analysis involved large imagery exports and multiple output types. The pipeline combines exported tiles with Pillow, adds map legends, and returns downloadable results through pre-signed links.',
    outcome: 'Created a boundary-to-results workflow that makes land-use classification accessible through a web interface and produces both visual and machine-readable outputs.',
    stack: ['React', 'Python', 'AWS Lambda', 'S3', 'Google Earth Engine', 'Dynamic World', 'Sentinel-2', 'WDPA', 'Pillow', 'AWS CDK', 'CloudWatch']
  },
  {
    id: 'georeference', title: 'Old maps. New possibilities.', name: 'GeoReference-CSU / Talk to Map', client: 'Colorado State University Libraries', group: 'cic', category: 'Document intelligence · Geospatial', art: 'maps',
    summary: 'An event-driven pipeline that turns historical water-resource maps into searchable, map-ready metadata.',
    tags: ['Textract', 'Bedrock', 'GeoJSON', 'AWS CDK'],
    problem: 'CSU Libraries’ Water Resources Archive contained large TIFF maps with incomplete geolocation and structured metadata. Useful information was difficult to discover or reuse in digital library systems.',
    role: 'Helped build the backend pipeline for AWS AI/ML processing, Lambda orchestration, OCR, LLM metadata extraction, geocoding, and output automation.',
    built: ['S3-triggered processing of historical map images.', 'Overlapping image segments, OCR confidence filtering, and deduplicated text extraction with Textract.', 'Water-resource entity extraction using Claude through Amazon Bedrock.', 'Colorado-scoped geocoding with Geopy/Nominatim, versioned GeoJSON delivery to GitHub, and Dublin Core CSV output to S3.'],
    flow: ['TIFF in S3', 'Lambda + Textract', 'Bedrock entities', 'Geopy coordinates', 'GeoJSON + CSV'],
    decision: 'Built an event-driven backend so map processing can run independently of the browser. Produced both GeoJSON for developers and standardized Dublin Core metadata for library workflows.',
    challenge: 'Large TIFFs and noisy labels complicated OCR and geocoding. Overlapping image segments preserve edge text; focused prompts isolate water resources; geographically scoped searches reduce ambiguity.',
    outcome: 'Automated a manual map-to-metadata workflow and delivered a maintainable serverless pipeline with repeatable deployment and traceable error outputs.',
    stack: ['Python', 'AWS Lambda', 'S3', 'Textract', 'Amazon Bedrock', 'Geopy', 'Nominatim', 'GeoJSON', 'GitHub API', 'AWS CDK', 'CloudWatch']
  },
  {
    id: 'catholic-charities', title: 'Finding support, made simpler.', name: 'Catholic Charities AI Assistant', client: 'Catholic Charities USA', group: 'cic', category: 'AI search · Community services', art: 'charities',
    summary: 'One conversational interface for service information spread across regional websites and documents.',
    tags: ['Amazon Q Business', 'React', 'Python', 'CodeBuild'],
    problem: 'Housing, food, financial assistance, and other service information was distributed across regional and subsidiary websites. Users and staff needed a simpler way to locate relevant support information.',
    role: 'Developed the full-stack AI assistant with a React frontend, Python Lambda backend, Amazon Q Business integration, S3-backed ingestion, and automated infrastructure deployment.',
    built: ['Natural-language search across indexed websites and document sources.', 'Clickable source attribution for verifiable responses.', 'A responsive React and Material-UI interface with suggested FAQ prompts.', 'CDK and CodeBuild deployment automation plus EventBridge-based content refresh.'],
    flow: ['React / Amplify', 'Lambda API', 'Amazon Q Business', 'Indexed web + S3', 'Answer + sources'],
    decision: 'Selected Amazon Q Business for managed indexing and retrieval. This reduced the amount of custom retrieval infrastructure and kept the prototype focused on the service-discovery experience.',
    challenge: 'Fragmented content required a centralized knowledge layer and a repeatable update process. S3-backed sources and synchronization workflows made information easier to maintain after handoff.',
    outcome: 'Delivered a documented service-information prototype with source-backed responses and repeatable deployment. The scope covers information discovery rather than real-time service availability or case management.',
    stack: ['React', 'Material-UI', 'Python', 'TypeScript', 'Lambda', 'Amazon Q Business', 'S3', 'Amplify', 'AWS CDK', 'CodeBuild', 'EventBridge']
  },
  {
    id: 'compilers', title: 'From grammar to execution.', name: 'Compiler Construction Projects', client: 'Coursework', group: 'coursework', category: 'Coursework · Language systems', art: 'compiler',
    summary: 'Three C++ compiler projects spanning recursive-descent parsing, grammar analysis, and executable intermediate representation.',
    tags: ['C++11', 'Parsing', 'FIRST / FOLLOW', 'IR generation'],
    problem: 'Translate formal language specifications into correct executable systems, including syntax validation, semantic checks, grammar transformations, and intermediate code generation.',
    role: 'Implemented three coursework projects in C++11, using provided lexical-analysis utilities and an interpreter where specified. Focused on parser design, representations, semantic logic, and deterministic output.',
    built: ['A polynomial-language compiler with semantic diagnostics, evaluation, warnings, and degree analysis.', 'A context-free grammar analyzer for nullable, FIRST, and FOLLOW sets, left factoring, and left-recursion removal.', 'An imperative-language compiler producing a linked-list instruction graph for execution by the supplied interpreter.', 'Support for assignment, input/output, if, while, switch, and for constructs in intermediate representation.'],
    flow: ['Source text', 'Provided lexer', 'Recursive-descent parser', 'Semantic analysis', 'IR / execution'],
    decision: 'Kept parsing, semantic validation, and execution separate. Recursive data structures model polynomial expressions, while pointer-linked instructions express control flow without reparsing the input.',
    challenge: 'Nested expressions, grammar edge cases, and instruction targets require precise bookkeeping. Symbol tables, explicit parser functions, and deterministic stdin/stdout checks kept behavior inspectable.',
    outcome: 'Built a progression of compiler components demonstrating language-processing fundamentals, low-level data structures, and careful separation of compiler phases.',
    stack: ['C++11', 'STL', 'Recursive-descent parsing', 'Semantic analysis', 'Context-free grammars', 'Intermediate representation', 'GCC / g++', 'Ubuntu']
  },
  {
    id: 'tourism', title: 'A solid foundation for every journey.', name: 'Tourist Agencies Management System', client: 'Coursework', group: 'coursework', category: 'Coursework · Full-stack systems', art: 'tourism',
    summary: 'A database-centered travel management app connecting tours, bookings, customers, billing, and operational reporting.',
    tags: ['PostgreSQL', 'React', 'Node.js', 'Express'],
    problem: 'Travel-agency operations involve interconnected tours, hotels, vehicles, bookings, discounts, and billing. These relationships needed a consistent data model and an accessible application interface.',
    role: 'Contributed to requirements analysis, ER modeling, schema normalization, SQL implementation, backend/frontend implementation support, and documentation as a coursework project.',
    built: ['A normalized PostgreSQL schema with 15+ entities, foreign keys, and integrity constraints.', 'Triggers and stored functions supporting billing and cancellation workflows.', 'Node.js / Express routes exposing database operations to a React frontend.', '40+ analytical SQL queries using joins, CTEs, and aggregations for operational insights.'],
    flow: ['React interface', 'Express API', 'PostgreSQL', 'Functions + triggers', 'Reports + workflows'],
    decision: 'Centered the application on a relational database to represent the domain’s many structured relationships and enforce consistency through constraints, joins, and transactional behavior.',
    challenge: 'Requirements had to become a usable schema without losing business rules. Role-play interviews, questionnaires, ER diagrams, and normalization informed the design before implementation.',
    outcome: 'Delivered a database-backed full-stack application demonstrating relational design, SQL business logic, API integration, and reporting.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'SQL', 'PL/pgSQL', 'ER modeling', 'Normalization', 'GitHub']
  }
];
