(function() {var implementors = {};
implementors["raft"] = [{"text":"impl RefUnwindSafe for ReplicationState","synthetic":true,"types":[]},{"text":"impl&lt;Log, Random, NodeId&gt; RefUnwindSafe for RaftState&lt;Log, Random, NodeId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Log: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;NodeId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Random: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RaftLogMemory","synthetic":true,"types":[]},{"text":"impl&lt;'a, Log&gt; RefUnwindSafe for CommittedIter&lt;'a, Log&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Log: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;NodeId&gt; RefUnwindSafe for SendableRaftMessage&lt;NodeId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NodeId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;NodeId&gt; RefUnwindSafe for RaftMessageDestination&lt;NodeId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NodeId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RaftMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Rpc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoteRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VoteResponse","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AppendRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AppendResponse","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LogEntry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TermId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LogIndex","synthetic":true,"types":[]},{"text":"impl&lt;Log, Random, NodeId&gt; RefUnwindSafe for RaftNode&lt;Log, Random, NodeId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Log: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;NodeId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Random: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RaftConfig","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; RefUnwindSafe for AppendError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()