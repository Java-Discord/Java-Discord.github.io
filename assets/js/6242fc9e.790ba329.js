(self.webpackChunkjava_bot_docs=self.webpackChunkjava_bot_docs||[]).push([[1494],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9460:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],i={id:"q26",title:"Week 26"},l={unversionedId:"qotw/weeks/q26",id:"qotw/weeks/q26",isDocsHomePage:!1,title:"Week 26",description:"26.04.2021 - 02.05.2021",source:"@site/docs/qotw/weeks/q26.md",sourceDirName:"qotw/weeks",slug:"/qotw/weeks/q26",permalink:"/qotw/weeks/q26",version:"current",frontMatter:{id:"q26",title:"Week 26"},sidebar:"weeks",previous:{title:"Week 25",permalink:"/qotw/weeks/q25"},next:{title:"Week 27",permalink:"/qotw/weeks/q27"}},c=[],u={toc:c};function p(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"26042021---02052021"},"26.04.2021 - 02.05.2021"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(7792).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Submission by dan1st#7327"))),(0,s.kt)("p",null,"Context switching is when the CPU (actually a CPU core) switches from executing one thread to another. This requires to swap stacks and consumes time where the CPU (core) cannot do actual processing. When using a lot of threads and/or make threads block often, context switches are introduced which may harm performance. Threads could block because of I/O, timed waits or locking. In the case of locking, it could be avoided by using nonblocking algorithms or busy waiting (actually done by ",(0,s.kt)("inlineCode",{parentName:"p"},"synchronized")," if the JIT thinks it is more efficient).\nProject Loom aims to reduce the impact of context switching using fibers but this is still in development.\nAs with all performance topics:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Premature optimization is the root of all evil"),(0,s.kt)("p",{parentName:"blockquote"},"Do not try to optimize everything. Mease where performance problems are, fix those and measure the change your fix made.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Submission by Dioxin#9863"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Context Switching"),"\nAllows a single CPU core to run multiple tasks by quickly switching between tasks."),(0,s.kt)("p",null,"A task is paused/suspended. The state of the task is stored to be resumed later. The CPU is then free to process another task. Eventually, the task suspends, and a previous task resumes."),(0,s.kt)("p",null,"When and how this occurs depends on the type of multit-tasking implemented."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Cooperative Multitasking"),"\nTasks are in control of when tasks (themselves) suspend. A scheduler launches the program, then waits for the program to return control back to the scheduler."),(0,s.kt)("p",null,"Lightweight scheduler, used in embedded systems. However, it's possible for a single poorly written task to hog the CPU, causing the system to hang."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Preemptive Multitasking"),"\nA scheduler is in control of when tasks suspend. An interrupt system determines when to suspend a task. Tasks are suspended once they've exceeded the time slice assigned to them."),(0,s.kt)("p",null,"Heavier scheduler, used in modern desktop operating systems. Time slices ensure every tasks gets time to be processed."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Submission by Spider EveryOS#8098"))),(0,s.kt)("p",null,"Context Switching is the OS's process of switching from one thread to another. When working within a single core, rarely can 2 threads truly run simultaneously. Instead, the OS must unload the execution data for one program and load the execution data for the other.\nThis is quite a bit lower level than Java, so I may be wrong, but if I understand correctly:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Registers are backed up into memory for the current context"),(0,s.kt)("li",{parentName:"ul"},"Registers are loaded from memory for the new context. This includes things like (in general) EAX, EBX, ECX, EDX, (for the stack) EBP, ESP, and other registers I'm not aware of because I don't work this low level (I use Java \u2122\ufe0f)"),(0,s.kt)("li",{parentName:"ul"},"After this, the EIP register needs set to the correct address to execute the code for the new context. You can't directly change the value stored by EIP, but my best guess on how this is done is via a well-place JMP instruction.\nI am not sure how the processor forces a thread to yield control to the OS (to do this switching), but my best guess is that it would be via some sort of hardware interrupt on a repeating timer or something, which would give the OS control even if the thread was still running a task.")),(0,s.kt)("p",null,"I could be totally off as, once again, I don't work at this level."))}p.isMDXComponent=!0},7792:function(e,t,n){"use strict";t.Z=n.p+"assets/images/QOTW26-7fd13a82da39461fa1e28c7004cfb6a4.png"}}]);