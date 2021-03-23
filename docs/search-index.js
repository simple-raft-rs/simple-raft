var searchIndex = JSON.parse('{\
"raft":{"doc":"Raft consensus algorithm implementation.","i":[[0,"core","raft","Unstable, low-level API for the complete state of a Raft …",null,null],[3,"ReplicationState","raft::core","The state of Raft log replication from a Raft node to one …",null,null],[12,"next_idx","","The index of the next log entry to be sent to this peer.",0,null],[12,"match_idx","","The index of the last log entry on this peer to up which …",0,null],[12,"inflight","","The index of the last log entry sent to this peer but …",0,null],[12,"send_probe","","Whether this node is currently probing to discover the …",0,null],[3,"RaftState","","The complete state of a Raft node.",null,null],[11,"new","","",1,[[["btreeset",3],["raftconfig",3]]]],[11,"commit_idx","","",1,[[],["logindex",3]]],[11,"config","","",1,[[],["raftconfig",3]]],[11,"is_leader","","",1,[[]]],[11,"leader","","",1,[[]]],[11,"log","","",1,[[]]],[11,"log_mut","","",1,[[]]],[11,"node_id","","",1,[[]]],[11,"peers","","",1,[[],["btreeset",3]]],[11,"replication_state","","",1,[[],[["replicationstate",3],["option",4]]]],[11,"set_config","","",1,[[["raftconfig",3]]]],[11,"take_committed","","",1,[[],["committediter",3]]],[11,"timer_tick","","",1,[[],[["option",4],["sendableraftmessage",3]]]],[11,"reset_peer","","",1,[[],[["option",4],["sendableraftmessage",3]]]],[11,"timeout","","",1,[[],[["option",4],["sendableraftmessage",3]]]],[11,"append_entries","","",1,[[],[["option",4],["sendableraftmessage",3]]]],[11,"client_request","","",1,[[["bytes",3]],[["appenderror",4],["result",4]]]],[11,"receive","","",1,[[["raftmessage",3]],[["option",4],["sendableraftmessage",3]]]],[5,"quorum_size","","Computes the minimum size of a quorum of nodes in a Raft …",null,[[]]],[0,"log","raft","Types related to Raft log storage.",null,null],[0,"mem","raft::log","A naive in-memory implementation of <code>RaftLog</code>, primarily …",null,null],[3,"RaftLogMemory","raft::log::mem","A naive in-memory implementation of <code>RaftLog</code>, primarily …",null,null],[11,"new_unbounded","","Constructs an empty Raft log with unbounded capacity.",2,[[]]],[11,"with_capacity","","Constructs an empty Raft log with bounded capacity.",2,[[]]],[8,"RaftLog","raft::log","An interface for storage of the Raft log of a <code>RaftNode</code>.",null,null],[16,"Error","","The type of error returned by fallable operations.",3,null],[10,"append","","Appends an entry to the end of the log.",3,[[["logentry",3]],["result",4]]],[10,"cancel_from","","Cancels all entries including and after the entry at …",3,[[["logindex",3]],["result",4]]],[10,"entry_len","","Returns the approximate serialized length in bytes of a …",3,[[["logentry",3]]]],[10,"get","","Returns the entry at a given index, or <code>None</code> if the index …",3,[[["logindex",3]],[["logentry",3],["option",4]]]],[10,"get_term","","Returns the term of the entry at a given index, or <code>None</code> …",3,[[["logindex",3]],[["termid",3],["option",4]]]],[11,"get_len","","Returns the approximate serialized length of the entry at …",3,[[["logindex",3]],["option",4]]],[10,"last_taken_index","","Returns the index of the last entry which has been …",3,[[],["logindex",3]]],[10,"last_index","","Returns the index of the last entry in the log, or …",3,[[],["logindex",3]]],[10,"last_term","","Returns the term of the last entry in the log, or …",3,[[],["termid",3]]],[10,"prev_index","","Returns the index immediately before the index of the …",3,[[],["logindex",3]]],[10,"prev_term","","Returns the term of the entry immediately preceding the …",3,[[],["termid",3]]],[10,"take_next","","Returns the next entry in the log not previously returned …",3,[[],[["logentry",3],["option",4]]]],[3,"CommittedIter","","An iterator yielding committed log entries.",null,null],[0,"message","raft","Raft message types for sending between nodes.",null,null],[3,"SendableRaftMessage","raft::message","A [<code>RaftMessage</code>] to be sent to a destination.",null,null],[12,"message","","The message to be sent.",4,null],[12,"dest","","The destination for the message.",4,null],[4,"RaftMessageDestination","","The destination for a [<code>SendableRaftMessage</code>].",null,null],[13,"Broadcast","","The associated message should be sent to all known peers.",5,null],[13,"To","","The associated message should be sent to one particular …",5,null],[3,"RaftMessage","","A message sent between Raft nodes.",null,null],[12,"term","","The greatest Raft leadership term ID seen by the sender.",6,null],[12,"rpc","","The Remote Procedure Call contained by this message.",6,null],[4,"Rpc","","A Remote Procedure Call message to a Raft node.",null,null],[13,"VoteRequest","","A request to obtain leadership amongst Raft nodes.",7,null],[13,"VoteResponse","","A response to a [<code>VoteRequest</code>] granting or denying …",7,null],[13,"AppendRequest","","A request to append entries to a Raft node\'s log.",7,null],[13,"AppendResponse","","A response to an [<code>AppendRequest</code>] allowing or denying an …",7,null],[11,"encode","","",7,[[]]],[11,"merge","","",7,[[["option",4],["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",7,[[]]],[3,"VoteRequest","","A request to obtain leadership amongst Raft nodes.",null,null],[12,"last_log_idx","","The Raft log index of the last log entry stored by this …",8,null],[12,"last_log_term","","The Raft leadership term of the last log entry stored by …",8,null],[3,"VoteResponse","","The response to a [<code>VoteRequest</code>] granting or denying …",null,null],[12,"vote_granted","","Whether the [<code>VoteRequest</code>] was granted or not.",9,null],[3,"AppendRequest","","A request to append entries to a Raft node\'s log.",null,null],[12,"prev_log_idx","","The Raft log index immediately before the index of the …",10,null],[12,"prev_log_term","","The Raft leadership term of the log entry immediately …",10,null],[12,"leader_commit","","The Raft log index of the last log entry known by the …",10,null],[12,"entries","","A list of consecutive Raft log entries to append.",10,null],[3,"AppendResponse","","The response to an [<code>AppendRequest</code>] allowing or denying an …",null,null],[12,"success","","Whether the [<code>AppendRequest</code>] was granted or not.",11,null],[12,"match_idx","","The Raft log index of the last log entry up to which the …",11,null],[12,"last_log_idx","","The Raft log index of the last log entry in the …",11,null],[3,"LogEntry","","An entry in a [Raft log][crate::log::RaftLog].",null,null],[12,"term","","The term of leadership of the node which appended this …",12,null],[12,"data","","Arbitrary data associated with the log entry.",12,null],[3,"TermId","","The unique, monotonically-increasing ID for a term of …",null,null],[12,"id","","The non-negative integer assigned to this term.",13,null],[3,"LogIndex","","A 1-based index into a [Raft log][crate::log::RaftLog].",null,null],[12,"id","","The integer representing this log index.",14,null],[11,"checked_sub","","Subtraction with a non-negative integer, checking for …",14,[[],["option",4]]],[0,"node","raft","Higher-level API for a Raft node.",null,null],[3,"RaftNode","raft::node","A Raft node, used for replicating a strongly-consistent …",null,null],[3,"RaftConfig","","Configurable parameters of a Raft node.",null,null],[12,"election_timeout_ticks","","The minimum number of timer ticks between leadership …",15,null],[12,"heartbeat_interval_ticks","","The number of timer ticks between sending heartbeats to …",15,null],[12,"replication_chunk_size","","The maximum number of bytes to replicate to a peer at a …",15,null],[4,"AppendError","","An error returned while attempting to append to a Raft …",null,null],[13,"Cancelled","","The append to the Raft log was cancelled and should be …",16,null],[12,"data","raft::node::AppendError","Arbitrary data associated with the log entry.",17,null],[13,"RaftLogErr","raft::node","An error was returned by the <code>RaftLog</code> implementation.",16,null],[11,"new","","Constructs a new Raft node with specified peers and …",18,[[["btreeset",3],["raftconfig",3]]]],[11,"append","","Request appending an entry with arbitrary <code>data</code> to the …",18,[[["into",8],["bytes",3]],[["appenderror",4],["result",4]]]],[11,"config","","Returns this node\'s configurable parameters.",18,[[],["raftconfig",3]]],[11,"is_leader","","Returns whether this node is the leader of the latest …",18,[[]]],[11,"last_committed_log_index","","Returns the index of the last <code>LogEntry</code> which has been …",18,[[],["logindex",3]]],[11,"leader","","Returns the ID of the leader, if there is one, of the …",18,[[]]],[11,"log","","Returns a reference to the Raft log storage.",18,[[]]],[11,"log_mut","","Returns a mutable reference to the Raft log storage.",18,[[]]],[11,"node_id","","Returns this node\'s ID.",18,[[]]],[11,"peers","","Returns the IDs of this node\'s peers.",18,[[],["btreeset",3]]],[11,"receive","","Processes receipt of a <code>message</code> from a peer with ID <code>from</code>, …",18,[[["raftmessage",3]]]],[11,"replication_state","","Returns the replication state corresponding to the peer …",18,[[],[["replicationstate",3],["option",4]]]],[11,"state","","Returns a reference to the low-level state of the Raft …",18,[[],["raftstate",3]]],[11,"state_mut","","Returns a mutable reference to the low-level state of the …",18,[[],["raftstate",3]]],[11,"take_committed","","Returns an iterator yielding committed log entries. A …",18,[[],["committediter",3]]],[11,"timer_tick","","Ticks forward this node\'s internal clock by one tick, …",18,[[]]],[11,"from","raft::core","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","raft::log::mem","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","raft::log","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"into","","",19,[[]]],[11,"try_into","","",19,[[],["result",4]]],[11,"into_iter","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","raft::message","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"from","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"from","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"from","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"to_string","","",9,[[],["string",3]]],[11,"from","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"from","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"to_string","","",11,[[],["string",3]]],[11,"from","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"into","","",12,[[]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"from","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"into","","",13,[[]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"from","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"into","","",14,[[]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"from","raft::node","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"into","","",18,[[]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"into","","",15,[[]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"from","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"into","","",16,[[]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"append","raft::log::mem","",2,[[["logentry",3]],["result",4]]],[11,"cancel_from","","",2,[[["logindex",3]],["result",4]]],[11,"entry_len","","",2,[[["logentry",3]]]],[11,"get","","",2,[[["logindex",3]],[["logentry",3],["option",4]]]],[11,"get_term","","",2,[[["logindex",3]],[["termid",3],["option",4]]]],[11,"prev_index","","",2,[[],["logindex",3]]],[11,"last_index","","",2,[[],["logindex",3]]],[11,"last_taken_index","","",2,[[],["logindex",3]]],[11,"last_term","","",2,[[],["termid",3]]],[11,"prev_term","","",2,[[],["termid",3]]],[11,"take_next","","",2,[[],[["logentry",3],["option",4]]]],[11,"fmt","raft::message","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"sub","","",14,[[]]],[11,"eq","","",6,[[["raftmessage",3]]]],[11,"ne","","",6,[[["raftmessage",3]]]],[11,"eq","","",7,[[["rpc",4]]]],[11,"ne","","",7,[[["rpc",4]]]],[11,"eq","","",8,[[["voterequest",3]]]],[11,"ne","","",8,[[["voterequest",3]]]],[11,"eq","","",9,[[["voteresponse",3]]]],[11,"ne","","",9,[[["voteresponse",3]]]],[11,"eq","","",10,[[["appendrequest",3]]]],[11,"ne","","",10,[[["appendrequest",3]]]],[11,"eq","","",11,[[["appendresponse",3]]]],[11,"ne","","",11,[[["appendresponse",3]]]],[11,"eq","","",12,[[["logentry",3]]]],[11,"ne","","",12,[[["logentry",3]]]],[11,"eq","","",13,[[["termid",3]]]],[11,"ne","","",13,[[["termid",3]]]],[11,"eq","","",14,[[["logindex",3]]]],[11,"ne","","",14,[[["logindex",3]]]],[11,"eq","raft::node","",15,[[["raftconfig",3]]]],[11,"ne","","",15,[[["raftconfig",3]]]],[11,"cmp","raft::message","",13,[[],["ordering",4]]],[11,"cmp","","",14,[[],["ordering",4]]],[11,"partial_cmp","","",13,[[],[["ordering",4],["option",4]]]],[11,"partial_cmp","","",14,[[],[["ordering",4],["option",4]]]],[11,"add","","",14,[[]]],[11,"add_assign","","",13,[[]]],[11,"next","raft::log","",19,[[],["option",4]]],[11,"size_hint","","",19,[[]]],[11,"clone","raft::message","",6,[[],["raftmessage",3]]],[11,"clone","","",7,[[],["rpc",4]]],[11,"clone","","",8,[[],["voterequest",3]]],[11,"clone","","",9,[[],["voteresponse",3]]],[11,"clone","","",10,[[],["appendrequest",3]]],[11,"clone","","",11,[[],["appendresponse",3]]],[11,"clone","","",12,[[],["logentry",3]]],[11,"clone","","",13,[[],["termid",3]]],[11,"clone","","",14,[[],["logindex",3]]],[11,"clone","raft::node","",15,[[],["raftconfig",3]]],[11,"default","raft::message","",6,[[]]],[11,"default","","",8,[[]]],[11,"default","","",9,[[]]],[11,"default","","",10,[[]]],[11,"default","","",11,[[]]],[11,"default","","",12,[[]]],[11,"default","","",13,[[]]],[11,"default","","",14,[[]]],[11,"encode_raw","","",6,[[]]],[11,"merge_field","","",6,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",6,[[]]],[11,"clear","","",6,[[]]],[11,"encode_raw","","",8,[[]]],[11,"merge_field","","",8,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",8,[[]]],[11,"clear","","",8,[[]]],[11,"encode_raw","","",9,[[]]],[11,"merge_field","","",9,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",9,[[]]],[11,"clear","","",9,[[]]],[11,"encode_raw","","",10,[[]]],[11,"merge_field","","",10,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",10,[[]]],[11,"clear","","",10,[[]]],[11,"encode_raw","","",11,[[]]],[11,"merge_field","","",11,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",11,[[]]],[11,"clear","","",11,[[]]],[11,"encode_raw","","",12,[[]]],[11,"merge_field","","",12,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",12,[[]]],[11,"clear","","",12,[[]]],[11,"encode_raw","","",13,[[]]],[11,"merge_field","","",13,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",13,[[]]],[11,"clear","","",13,[[]]],[11,"encode_raw","","",14,[[]]],[11,"merge_field","","",14,[[["wiretype",4],["decodecontext",3]],[["decodeerror",3],["result",4]]]],[11,"encoded_len","","",14,[[]]],[11,"clear","","",14,[[]]]],"p":[[3,"ReplicationState"],[3,"RaftState"],[3,"RaftLogMemory"],[8,"RaftLog"],[3,"SendableRaftMessage"],[4,"RaftMessageDestination"],[3,"RaftMessage"],[4,"Rpc"],[3,"VoteRequest"],[3,"VoteResponse"],[3,"AppendRequest"],[3,"AppendResponse"],[3,"LogEntry"],[3,"TermId"],[3,"LogIndex"],[3,"RaftConfig"],[4,"AppendError"],[13,"Cancelled"],[3,"RaftNode"],[3,"CommittedIter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);