## 1. “Walk me through your resume / Tell me about yourself.”
### I’m a senior front-end engineer with over 5 years of experience building and maintaining complex production React + TypeScript applications, with the last 3+ years focused heavily on visual workflow and graph-based tools.  Most recently at Kansas City Defender Company, I owned the front-end for a visual process-builder used by operations teams. It was a ReactFlow-based editor where users created nodes for steps, materials, and inspections — very similar to the manufacturing workflow editor described in the JD. I handled everything from node/edge interactions and property panels to schema-driven validation and GitLab-backed version control.  I’m particularly excited about this role at Atomic Machines because the Matter Compiler™ platform sounds like a genuinely new category of micromanufacturing, and I love working on tools that sit at the intersection of precise data integrity and real-world physical processes.

## 2. “Have you worked on graph/diagram editors before? Which libraries?”
### Yes — I’ve spent the last 6 months maintaining and extending a production graph editor built with ReactFlow (v11+) in a TypeScript codebase.  I implemented full node/edge creation, multi-select with keyboard shortcuts, drag-and-drop, custom node types, and a right-hand property panel that updates live. I also built copy/paste logic that transforms IDs correctly and supports “minting/locking” of finalized nodes — exactly the kind of identity rules mentioned in the JD.  The editor regularly handled 300–600 node workflows, so I became very familiar with ReactFlow’s useReactFlow, onNodesChange/onEdgesChange, and performance patterns to keep it buttery smooth.

## 3. “What performance challenges have you faced with large graphs and how did you solve them?”
### The biggest challenge was rendering jitter and lag when graphs grew beyond ~400 nodes.  I solved it by:  Wrapping custom nodes in React.memo and using useCallback for all change handlers.  
### Implementing selective re-renders with Zustand (instead of React Context) for the graph state.  
### Adding virtual rendering for the property panel and debouncing the auto-save.  
### Using ReactFlow’s built-in nodeInternals optimization and profiling with React DevTools Profiler + Chrome Performance tab.

### Result: we went from 200–300 ms frame times down to <16 ms even on large graphs. The team noticed the difference immediately, and it made the tool usable for real manufacturing engineers.

## 4. “How do you manage complex client-side state when correctness and data integrity are critical?”
### “I treat the graph as the single source of truth and keep it normalized in a lightweight store (usually Zustand or Jotai).  For IDs, I have a small service that generates stable, collision-resistant IDs on creation and handles all transformations during copy/paste/import. I also implemented “minting/locking” — once a node is marked finalized, certain fields become read-only and are frozen in the schema.  Every state change goes through a typed updater that runs AJV validation immediately, so we never persist invalid data. This pattern kept our export JSON 100% backwards-compatible even as the schema evolved over 18 months.”

## 5. “Tell me about your experience with JSON Schema / AJV and strict export formats.”
### “I’ve used JSON Schema + AJV heavily in the last two production projects.  I maintain a central workflow.schema.json file and run validation on every save and before export. I also wrote custom keywords for domain-specific rules (e.g., material catalog references and inspection step contracts).  To keep exports stable as the schema changes, I use AJV’s strict: false only in development and always bump a schemaVersion field in the output JSON. This way downstream tooling never breaks — exactly the “stable, backwards-compatible outputs” requirement in the JD.”

## 6. “Tell me about your experience integrating with REST APIs, especially offline/error handling.”Model Answer
### “I’ve integrated with GitLab APIs (branches, commits, merge requests) in my last role, and also with internal catalog APIs very similar to the Methods API mentioned.  I built a thin wrapper that:  Syncs the materials catalog on load with an offline fallback (IndexedDB).  
### Shows a clear banner and blocks “Push to GitLab” when the API is unreachable.  
### Uses React Query for caching and automatic retries.

### For Okta/OIDC auth, I used the official @okta/okta-react SDK with silent refresh and proper logout handling. The result was that manufacturing users could keep working even during brief network hiccups — which happened quite often in the factory environment.”

## 7. “How do you test non-trivial logic (ID transformations, export validation, API sync)?”Model Answer
### “I write focused unit tests (Jest + TypeScript) for anything that isn’t pure UI.  Examples:  ID transformation suite: 25+ tests covering copy/paste, import, minting, and locking.  
### Export validation: I test the exact JSON output against multiple schema versions using AJV.  
### API sync: I mock the GitLab and Methods APIs and assert offline fallback behavior and error states.

### I avoid snapshot tests for business logic and instead test the actual contracts. This caught several subtle bugs before they reached users and kept the pipeline green even during heavy refactoring.”

## 8. “Why are you interested in this role at Atomic Machines?”
### “Honestly, this role feels like the perfect intersection of everything I’ve built my career around.  I started with a Master’s degree in Automation Engineering, where I had to dive deep into programming and software engineering just to design and control real manufacturing systems — things like process workflows, material handling, and inspection sequences. That foundation is why I eventually transitioned fully into software engineering, and today I specialize in building modern front-end applications with React and TypeScript, along with the back-end, databases, and APIs that make complex tools actually reliable in production.  What excites me most about Atomic Machines is that the Matter Compiler™ platform is solving exactly the kind of problem I was dealing with in automation engineering — creating entirely new classes of micromachines that traditional semiconductor methods can’t touch. Now I get to build the actual digital tool that manufacturing and process engineers will use every day: a precise, multi-material, multi-process graph editor with strict validation and version control. It’s rare to find a role that combines deep manufacturing-domain knowledge with the kind of high-quality React + data-integrity work I love doing.  Plus, the remote contract structure with async collaboration matches how I work best. 





