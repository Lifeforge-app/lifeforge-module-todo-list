export type EndpointEntriesList_OutputOK = {
  id: string;
  summary: string;
  notes: string;
  due_date: string | null;
  due_date_has_time: boolean;
  list: string | null;
  tags: string[];
  priority: string | null;
  done: boolean;
  completed_at: string | null;
  created: string;
  updated: string;
}[];
export type EndpointEntriesRemove_OutputNO_CONTENT = void;
export type EndpointPrioritiesList_OutputOK = {
  id: string;
  name: string;
  color: string;
  amount: number;
}[];
export type EndpointPrioritiesRemove_OutputNO_CONTENT = void;
export type EndpointListsList_OutputOK = {
  id: string;
  name: string;
  color: string;
  icon: string;
  amount: number;
}[];
export type EndpointListsRemove_OutputNO_CONTENT = void;
export type EndpointTagsList_OutputOK = {
  id: string;
  name: string;
  amount: number;
}[];
export type EndpointTagsRemove_OutputNO_CONTENT = void;

export interface Contract {
  entries: {
    create: EndpointEntriesCreate;
    getById: EndpointEntriesGetById;
    getStatusCounter: EndpointEntriesGetStatusCounter;
    list: EndpointEntriesList;
    remove: EndpointEntriesRemove;
    toggleEntry: EndpointEntriesToggleEntry;
    update: EndpointEntriesUpdate;
  };
  priorities: {
    create: EndpointPrioritiesCreate;
    list: EndpointPrioritiesList;
    remove: EndpointPrioritiesRemove;
    update: EndpointPrioritiesUpdate;
  };
  lists: {
    create: EndpointListsCreate;
    list: EndpointListsList;
    remove: EndpointListsRemove;
    update: EndpointListsUpdate;
  };
  tags: {
    create: EndpointTagsCreate;
    list: EndpointTagsList;
    remove: EndpointTagsRemove;
    update: EndpointTagsUpdate;
  };
}
export interface EndpointEntriesCreate {
  method: "post";
  input: {
    body?: EndpointEntriesCreate_InputBody;
  };
  output: {
    CREATED: EndpointEntriesCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointEntriesCreate_InputBody {
  summary: string;
  notes?: string;
  due_date?: string;
  due_date_has_time?: boolean;
  list?: string;
  tags?: string[];
  priority?: string;
}
export interface EndpointEntriesCreate_OutputCREATED {
  id: string;
  summary: string;
  notes: string;
  due_date: string | null;
  due_date_has_time: boolean;
  list: string | null;
  tags: string[];
  priority: string | null;
  done: boolean;
  completed_at: string | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesGetById {
  method: "get";
  input: {
    query?: EndpointEntriesGetById_InputQuery;
  };
  output: {
    OK: EndpointEntriesGetById_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesGetById_InputQuery {
  id: string;
}
export interface EndpointEntriesGetById_OutputOK {
  id: string;
  summary: string;
  notes: string;
  due_date: string | null;
  due_date_has_time: boolean;
  list: string | null;
  tags: string[];
  priority: string | null;
  done: boolean;
  completed_at: string | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesGetStatusCounter {
  method: "get";
  input: {};
  output: {
    OK: EndpointEntriesGetStatusCounter_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesGetStatusCounter_OutputOK {
  all: number;
  today: number;
  scheduled: number;
  overdue: number;
  completed: number;
}
export interface EndpointEntriesList {
  method: "get";
  input: {
    query?: EndpointEntriesList_InputQuery;
  };
  output: {
    OK: EndpointEntriesList_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesList_InputQuery {
  list?: string;
  status: string;
  priority?: string;
  tag?: string;
  query?: string;
}
export interface EndpointEntriesRemove {
  method: "post";
  input: {
    query?: EndpointEntriesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointEntriesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointEntriesRemove_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleEntry {
  method: "post";
  input: {
    query?: EndpointEntriesToggleEntry_InputQuery;
  };
  output: {
    OK: EndpointEntriesToggleEntry_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesToggleEntry_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleEntry_OutputOK {
  id: string;
  summary: string;
  notes: string;
  due_date: string | null;
  due_date_has_time: boolean;
  list: string | null;
  tags: string[];
  priority: string | null;
  done: boolean;
  completed_at: string | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesUpdate {
  method: "post";
  input: {
    query?: EndpointEntriesUpdate_InputQuery;
    body?: EndpointEntriesUpdate_InputBody;
  };
  output: {
    OK: EndpointEntriesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesUpdate_InputQuery {
  id: string;
}
export interface EndpointEntriesUpdate_InputBody {
  summary: string;
  notes?: string;
  due_date?: string;
  due_date_has_time?: boolean;
  list?: string;
  tags?: string[];
  priority?: string;
}
export interface EndpointEntriesUpdate_OutputOK {
  id: string;
  summary: string;
  notes: string;
  due_date: string | null;
  due_date_has_time: boolean;
  list: string | null;
  tags: string[];
  priority: string | null;
  done: boolean;
  completed_at: string | null;
  created: string;
  updated: string;
}
export interface EndpointPrioritiesCreate {
  method: "post";
  input: {
    body?: EndpointPrioritiesCreate_InputBody;
  };
  output: {
    CREATED: EndpointPrioritiesCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointPrioritiesCreate_InputBody {
  name: string;
  color: string;
}
export interface EndpointPrioritiesCreate_OutputCREATED {
  id: string;
  name: string;
  color: string;
}
export interface EndpointPrioritiesList {
  method: "get";
  input: {};
  output: {
    OK: EndpointPrioritiesList_OutputOK;
  };
  media: null;
}
export interface EndpointPrioritiesRemove {
  method: "post";
  input: {
    query?: EndpointPrioritiesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointPrioritiesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointPrioritiesRemove_InputQuery {
  id: string;
}
export interface EndpointPrioritiesUpdate {
  method: "post";
  input: {
    query?: EndpointPrioritiesUpdate_InputQuery;
    body?: EndpointPrioritiesUpdate_InputBody;
  };
  output: {
    OK: EndpointPrioritiesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointPrioritiesUpdate_InputQuery {
  id: string;
}
export interface EndpointPrioritiesUpdate_InputBody {
  name: string;
  color: string;
}
export interface EndpointPrioritiesUpdate_OutputOK {
  id: string;
  name: string;
  color: string;
}
export interface EndpointListsCreate {
  method: "post";
  input: {
    body?: EndpointListsCreate_InputBody;
  };
  output: {
    CREATED: EndpointListsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointListsCreate_InputBody {
  name: string;
  icon: string;
  color: string;
}
export interface EndpointListsCreate_OutputCREATED {
  id: string;
  name: string;
  icon: string;
  color: string;
}
export interface EndpointListsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointListsList_OutputOK;
  };
  media: null;
}
export interface EndpointListsRemove {
  method: "post";
  input: {
    query?: EndpointListsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointListsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointListsRemove_InputQuery {
  id: string;
}
export interface EndpointListsUpdate {
  method: "post";
  input: {
    query?: EndpointListsUpdate_InputQuery;
    body?: EndpointListsUpdate_InputBody;
  };
  output: {
    OK: EndpointListsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointListsUpdate_InputQuery {
  id: string;
}
export interface EndpointListsUpdate_InputBody {
  name: string;
  icon: string;
  color: string;
}
export interface EndpointListsUpdate_OutputOK {
  id: string;
  name: string;
  icon: string;
  color: string;
}
export interface EndpointTagsCreate {
  method: "post";
  input: {
    body?: EndpointTagsCreate_InputBody;
  };
  output: {
    CREATED: EndpointTagsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointTagsCreate_InputBody {
  name: string;
}
export interface EndpointTagsCreate_OutputCREATED {
  id: string;
  name: string;
}
export interface EndpointTagsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointTagsList_OutputOK;
  };
  media: null;
}
export interface EndpointTagsRemove {
  method: "post";
  input: {
    query?: EndpointTagsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointTagsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointTagsRemove_InputQuery {
  id: string;
}
export interface EndpointTagsUpdate {
  method: "post";
  input: {
    query?: EndpointTagsUpdate_InputQuery;
    body?: EndpointTagsUpdate_InputBody;
  };
  output: {
    OK: EndpointTagsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointTagsUpdate_InputQuery {
  id: string;
}
export interface EndpointTagsUpdate_InputBody {
  name: string;
}
export interface EndpointTagsUpdate_OutputOK {
  id: string;
  name: string;
}
