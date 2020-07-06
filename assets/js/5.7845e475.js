(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_6-null-the-missing-semester-of-your-cs-education"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-null-the-missing-semester-of-your-cs-education"}},[e._v("#")]),e._v(" 6.NULL:The Missing Semester of Your CS Education")]),e._v(" "),s("h2",{attrs:{id:"lec1-course-overview-the-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lec1-course-overview-the-shell"}},[e._v("#")]),e._v(" Lec1.Course overview + the shell")]),e._v(" "),s("h3",{attrs:{id:"shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[e._v("#")]),e._v(" Shell")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" - "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# will cd to the directory you were perviously in")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# redirect STDOUT with append")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# take output of the program to the left and make input of the program to the right")]),e._v("\n")])])]),s("h3",{attrs:{id:"permission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permission"}},[e._v("#")]),e._v(" Permission")]),e._v(" "),s("p",[e._v("First, the d at the beginning of the line tells us that missing is a directory. Then follow three groups of three characters (rwx). These indicate what permissions the owner of the file (missing), the owning group (users), and everyone else respectively have on the relevant item.")]),e._v(" "),s("h3",{attrs:{id:"quote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quote"}},[e._v("#")]),e._v(" Quote")]),e._v(" "),s("p",[e._v("https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html#Double-Quotes")]),e._v(" "),s("h2",{attrs:{id:"lec2-shell-tools-and-scripting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lec2-shell-tools-and-scripting"}},[e._v("#")]),e._v(" Lec2.Shell Tools and Scripting")]),e._v(" "),s("h3",{attrs:{id:"shell-scripting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-scripting"}},[e._v("#")]),e._v(" Shell Scripting")]),e._v(" "),s("p",[e._v("To assign variables in bash, use the syntax "),s("code",[e._v("foo=bar")]),e._v(" and access the value of variable  with "),s("code",[e._v("$foo")]),e._v(". (Note that "),s("code",[e._v("foo = bar")]),e._v(" will not work, in general, in shell script the space character will perform argument splitting)")]),e._v(" "),s("p",[e._v("Strings delimited with "),s("code",[e._v("'")]),e._v("' are literal strings and will not subsitute variable values where as "),s("code",[e._v('"')]),e._v("delimited strings will.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("foo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("bar\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$foo")]),e._v('"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bar")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$foo")]),e._v("'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $foo")]),e._v("\n")])])]),s("p",[e._v("a shell script file(mcd.sh):")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-name function"}},[e._v("mcdfunc")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v('"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v('"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v('"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# > $ mcdfunc 123                                                                ")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mcdfunc")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# zhao70@laptop ~/123  ")]),e._v("\n")])])]),s("p",[e._v("source命令也称“点命令”， 是bash的内部命令")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" mcd.sh "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# execute the script in our shell and load it ")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" mcd.sh\n")])])]),s("p",[e._v("source filename, sh filename 及 ./filename执行脚本的三者区别？")]),e._v(" "),s("ol",[s("li",[e._v('当shell脚本具有可执行权限时，用sh filename与./filename执行脚本是没有区别得。\n./filename是因为当前目录没有在PATH中，所有"."是用来表示当前目录的。')]),e._v(" "),s("li",[e._v("sh filename 重新建立一个子shell，在子shell中执行脚本里面的语句，该子shell继承父shell的环境变量，但子shell新建的、改变的变量不会被带回父shell，除非使用export。")]),e._v(" "),s("li",[e._v("source filename：这个命令其实只是简单地读取脚本里面的语句依次在当前shell里面执行，没有建立新的子shell。那么脚本里面所有新建、改变变量的语句都会保存在当前shell里面。")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("$0")]),e._v(" - Name of the script")]),e._v(" "),s("li",[s("code",[e._v("$1")]),e._v(" to "),s("code",[e._v("$9")]),e._v(" - Arguments to the script. "),s("code",[e._v("$1")]),e._v(" is the first argument and so on.")]),e._v(" "),s("li",[s("code",[e._v("$@")]),e._v(" - All the arguments")]),e._v(" "),s("li",[s("code",[e._v("$#")]),e._v(" - Number of arguments")]),e._v(" "),s("li",[s("code",[e._v("$?")]),e._v(" - Return code of the previous command")]),e._v(" "),s("li",[s("code",[e._v("$$")]),e._v(" - Process identification number (PID) for the current script")]),e._v(" "),s("li",[s("code",[e._v("!!")]),e._v(" - Entire last command, including arguments. A common pattern is to execute a command only for it to fail due to missing permissions; you can quickly re-execute the command with sudo by doing "),s("code",[e._v("sudo !!")])]),e._v(" "),s("li",[s("code",[e._v("$_")]),e._v(" - Last argument from the last command. If you are in an interactive shell, you can also quickly get this value by typing "),s("code",[e._v("Esc")]),e._v(" followed by "),s("code",[e._v(".")])])]),e._v(" "),s("p",[s("strong",[e._v("command substitution")]),e._v(":  get the output of a command as a variable.  Whenever you place "),s("code",[e._v("$( CMD )")]),e._v(" it will execute "),s("code",[e._v("CMD")]),e._v(", get the output of the command and substitute it in place.\n"),s("strong",[e._v("process substitution")]),e._v(": "),s("code",[e._v("<( CMD )")]),e._v(" will execute "),s("code",[e._v("CMD")]),e._v(" and place the output in a temporary file and substitute the "),s("code",[e._v("<()")]),e._v(" with that file’s name. This is useful when commands expect values to be passed by "),s("em",[e._v("file")]),e._v(" instead of by "),s("em",[e._v("STDIN")]),e._v(". "),s("code",[e._v("diff <(ls foo) <(ls bar)")])]),e._v(" "),s("p",[s("strong",[e._v("shell globbing")]),e._v(": expanding expressions by carrying out filename expansion.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Wildcards: use "),s("code",[e._v("?")]),e._v(" and "),s("code",[e._v("*")]),e._v(" to match one or any amount of characters respectively.")])]),e._v(" "),s("li",[s("p",[e._v("Curly braces "),s("code",[e._v("{}")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("foo,bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" convert image."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("png,jpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])]),e._v(" "),s("p",[s("strong",[e._v("shebang")]),e._v(": at the top of the script. It is a good practice to write shebang lines using the  "),s("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man1/env.1.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("env")]),s("OutboundLink")],1),e._v(" command that will resolve to wherever the command lives in the system, increasing the portability of your scripts.")]),e._v(" "),s("h3",{attrs:{id:"shell-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-tools"}},[e._v("#")]),e._v(" Shell Tools")]),e._v(" "),s("h4",{attrs:{id:"查找文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找文件"}},[e._v("#")]),e._v(" 查找文件")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查找所有名称为src的文件夹")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -name src -type d\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查找所有文件夹路径中包含test的python文件")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -path "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'**/test/**/*.py'")]),e._v(" -type f\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查找前一天修改的所有文件")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -mtime -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查找所有大小在500k至10M的tar.gz文件")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -size +500k -size -10M -name "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*.tar.gz'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete all files with .tmp extension")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -name "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*.tmp'")]),e._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Find all PNG files and convert them to JPG")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -name "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*.png'")]),e._v(" -exec convert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(".jpg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("如果您希望模式匹配时是不区分大小写，可以使用"),s("code",[e._v("-iname")]),e._v("选项")]),e._v(" "),s("h4",{attrs:{id:"查找shell命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找shell命令"}},[e._v("#")]),e._v(" 查找shell命令")]),e._v(" "),s("p",[e._v("对于大多数的shell来说，您可以使用 "),s("code",[e._v("Ctrl+R")]),e._v(" 对命令历史记录进行回溯搜索。敲 "),s("code",[e._v("Ctrl+R")]),e._v(" 后您可以输入子串来进行匹配，查找历史命令行。")]),e._v(" "),s("p",[e._v("输入命令时，如果您在命令的开头加上一个空格，它就不会被加进shell记录中。当你输入包含密码或是其他敏感信息的命令时会用到这一特性。")]),e._v(" "),s("h2",{attrs:{id:"lec3-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lec3-vim"}},[e._v("#")]),e._v(" Lec3.Vim")]),e._v(" "),s("h3",{attrs:{id:"model-editing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-editing"}},[e._v("#")]),e._v(" Model editing")]),e._v(" "),s("p",[e._v("Vim has multiple operating modes.")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Normal")]),e._v(": for moving around a file and making edits")]),e._v(" "),s("li",[s("strong",[e._v("Insert")]),e._v(": for inserting text(press "),s("code",[e._v("i")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("Replace")]),e._v(": for replacing text(press "),s("code",[e._v("R")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("Visual")]),e._v(" (plain"),s("code",[e._v("v")]),e._v(", line"),s("code",[e._v("V")]),e._v(", or block"),s("code",[e._v("<C-v>")]),e._v("): for selecting blocks of text")]),e._v(" "),s("li",[s("strong",[e._v("Command-line")]),e._v(": for running a command(press"),s("code",[e._v(":")]),e._v(")")])]),e._v(" "),s("h3",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),s("h4",{attrs:{id:"buffers-tabs-and-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffers-tabs-and-windows"}},[e._v("#")]),e._v(" Buffers, tabs, and windows")]),e._v(" "),s("p",[e._v("Vim maintains a set of open files, called “buffers”.  A Vim session has a number of tabs, each of which has a number of windows (split panes). A given buffer may be open in "),s("em",[e._v("multiple")]),e._v(" windows, even within the same tab.")]),e._v(" "),s("h4",{attrs:{id:"command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command-line")]),e._v(" "),s("ul",[s("li",[s("code",[e._v(":e {name of file}")]),e._v(" open file for editing")]),e._v(" "),s("li",[s("code",[e._v(":ls")]),e._v(" show open buffers")]),e._v(" "),s("li",[s("code",[e._v(":help {topic}")]),e._v(" open help")])]),e._v(" "),s("h3",{attrs:{id:"vim-s-interface-is-a-programming-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-s-interface-is-a-programming-language"}},[e._v("#")]),e._v(" Vim’s interface is a programming language")]),e._v(" "),s("h4",{attrs:{id:"movement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movement"}},[e._v("#")]),e._v(" Movement")]),e._v(" "),s("ul",[s("li",[e._v("Words: "),s("code",[e._v("w")]),e._v(" (next word), "),s("code",[e._v("b")]),e._v(" (beginning of word), "),s("code",[e._v("e")]),e._v(" (end of word)")]),e._v(" "),s("li",[e._v("Lines: "),s("code",[e._v("0")]),e._v(" (beginning of line), "),s("code",[e._v("^")]),e._v(" (first non-blank character), "),s("code",[e._v("$")]),e._v(" (end of line)")]),e._v(" "),s("li",[e._v("Screen: "),s("code",[e._v("H")]),e._v(" (top of screen), "),s("code",[e._v("M")]),e._v(" (middle of screen), "),s("code",[e._v("L")]),e._v(" (bottom of screen)")]),e._v(" "),s("li",[e._v("Scroll: "),s("code",[e._v("Ctrl-u")]),e._v(" (up), "),s("code",[e._v("Ctrl-d")]),e._v(" (down)")]),e._v(" "),s("li",[e._v("File: "),s("code",[e._v("gg")]),e._v(" (beginning of file), "),s("code",[e._v("G")]),e._v(" (end of file)")]),e._v(" "),s("li",[e._v("Line numbers: "),s("code",[e._v(":{number}<CR>")]),e._v(" or "),s("code",[e._v("{number}G")]),e._v(" (line {number}) //"),s("code",[e._v("<CR>")]),e._v("就是回车")]),e._v(" "),s("li",[e._v("Misc: "),s("code",[e._v("%")]),e._v(" (corresponding item)")]),e._v(" "),s("li",[e._v("Find: "),s("code",[e._v("f{character}")]),e._v(", "),s("code",[e._v("t{character}")]),e._v(", "),s("code",[e._v("F{character}")]),e._v(", "),s("code",[e._v("T{character}")]),e._v(" "),s("ul",[s("li",[e._v("find/to(f为光标在匹配字母上， t为光标在匹配字母前，大写为反向查找) forward/backward {character} on the "),s("strong",[e._v("current line")])]),e._v(" "),s("li",[s("code",[e._v(",")]),e._v("(the previous)/ "),s("code",[e._v(";")]),e._v("(the next) for navigating matches")])])])]),e._v(" "),s("h4",{attrs:{id:"edits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edits"}},[e._v("#")]),e._v(" Edits")]),e._v(" "),s("p",[s("code",[e._v("d{motion}")]),e._v(" delete {motion}")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("e.g. "),s("code",[e._v("dw")]),e._v(" is delete word, "),s("code",[e._v("d$")]),e._v(" is delete to end of line, "),s("code",[e._v("d0")]),e._v(" is delete to beginning of line")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("c{motion}")]),e._v(" change {motion}")]),e._v(" "),s("ul",[s("li",[e._v("e.g. "),s("code",[e._v("cw")]),e._v(" is change word")]),e._v(" "),s("li",[e._v("like "),s("code",[e._v("d{motion}")]),e._v(" followed by "),s("code",[e._v("i")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("x")]),e._v(" delete character (equal do "),s("code",[e._v("dl")]),e._v(")")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("s")]),e._v(" substitute character (equal to "),s("code",[e._v("xi")]),e._v(")")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("r{character}")]),e._v("replace character")])]),e._v(" "),s("li",[s("p",[e._v("Visual mode + manipulation")]),e._v(" "),s("ul",[s("li",[e._v("select text, "),s("code",[e._v("d")]),e._v(" to delete it or "),s("code",[e._v("c")]),e._v(" to change it")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("u")]),e._v(" to undo, "),s("code",[e._v("<C-r>")]),e._v(" to redo")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("y")]),e._v(" to copy / “yank” (some other commands like "),s("code",[e._v("d")]),e._v(" also copy)")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("p")]),e._v(" to paste")])]),e._v(" "),s("li",[s("p",[e._v("Lots more to learn: e.g. "),s("code",[e._v("~")]),e._v(" flips the case of a character")])])]),e._v(" "),s("h4",{attrs:{id:"modifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modifiers"}},[e._v("#")]),e._v(" Modifiers")]),e._v(" "),s("p",[e._v("You can use modifiers to change the meaning of a noun. Some modifiers are "),s("code",[e._v("i")]),e._v(", which means “inner” or “inside”, and "),s("code",[e._v("a")]),e._v(", which means “around”.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ci(")]),e._v(" change the contents inside the current pair of parentheses")]),e._v(" "),s("li",[s("code",[e._v("ci[")]),e._v(" change the contents inside the current pair of square brackets")]),e._v(" "),s("li",[s("code",[e._v("da'")]),e._v(" delete a single-quoted string, including the surrounding single quotes")])]),e._v(" "),s("h3",{attrs:{id:"extending-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-vim"}},[e._v("#")]),e._v(" Extending Vim")]),e._v(" "),s("p",[e._v("Contrary to outdated advice that you might find on the internet, you do "),s("em",[e._v("not")]),e._v(" need to use a plugin manager for Vim (since Vim 8.0). Instead, you can use the built-in package management system. Simply create the directory "),s("code",[e._v("~/.vim/pack/vendor/start/")]),e._v(", and put plugins in there (e.g. via "),s("code",[e._v("git clone")]),e._v(").")]),e._v(" "),s("h3",{attrs:{id:"advanced-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-vim"}},[e._v("#")]),e._v(" Advanced Vim")]),e._v(" "),s("h4",{attrs:{id:"search-and-replace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-and-replace"}},[e._v("#")]),e._v(" Search and replace")]),e._v(" "),s("p",[s("code",[e._v(":s")]),e._v(" (substitute) command ("),s("a",{attrs:{href:"http://vim.wikia.com/wiki/Search_and_replace",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("%s/foo/bar/g")])]),e._v(" "),s("ul",[s("li",[e._v("replace foo with bar globally in file")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("%s/\\[.*\\](\\(.*\\))/\\1/g")])]),e._v(" "),s("ul",[s("li",[e._v("replace named Markdown links with plain URLs")])])])]),e._v(" "),s("h3",{attrs:{id:"macros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macros"}},[e._v("#")]),e._v(" Macros")]),e._v(" "),s("h2",{attrs:{id:"lec4-data-wrangling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lec4-data-wrangling"}},[e._v("#")]),e._v(" Lec4.Data Wrangling")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" myserver journalctl "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" sshd\n")])])]),s("p",[e._v("Notice that we’re using a pipe to stream a "),s("em",[e._v("remote")]),e._v(" file through "),s("code",[e._v("grep")]),e._v(" on our local computer!")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" myserver "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'journalctl | grep sshd | grep \"Disconnected from\"'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("less")]),e._v("\n")])])]),s("p",[e._v("Why the additional quoting? Well, our logs may be quite large, and it’s wasteful to stream it all to our computer and then do the filtering. Instead, we can do the filtering on the remote server, and then massage the data locally.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" myserver journalctl\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" sshd\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Disconnected from"')]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/.*Disconnected from //'")]),e._v("\n")])])]),s("p",[e._v("The "),s("code",[e._v("s")]),e._v(" command is written on the form: "),s("code",[e._v("s/REGEX/SUBSTITUTION/")]),e._v(", where "),s("code",[e._v("REGEX")]),e._v(" is the regular expression you want to search for, and "),s("code",[e._v("SUBSTITUTION")]),e._v(" is the text you want to substitute matching text with.")]),e._v(" "),s("h4",{attrs:{id:"regular-expressions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#regular-expressions"}},[e._v("#")]),e._v(" Regular expressions")]),e._v(" "),s("ul",[s("li",[s("code",[e._v(".")]),e._v(" means “any single character” except newline")]),e._v(" "),s("li",[s("code",[e._v("*")]),e._v(" zero or more of the preceding match")]),e._v(" "),s("li",[s("code",[e._v("+")]),e._v(" one or more of the preceding match")]),e._v(" "),s("li",[s("code",[e._v("[abc]")]),e._v(" any one character of "),s("code",[e._v("a")]),e._v(", "),s("code",[e._v("b")]),e._v(", and "),s("code",[e._v("c")])]),e._v(" "),s("li",[s("code",[e._v("(RX1|RX2)")]),e._v(" either something that matches "),s("code",[e._v("RX1")]),e._v(" or "),s("code",[e._v("RX2")])]),e._v(" "),s("li",[s("code",[e._v("^")]),e._v(" the start of the line")]),e._v(" "),s("li",[s("code",[e._v("$")]),e._v(" the end of the line")])]),e._v(" "),s("p",[e._v("todo: sed awk find sort grep")]),e._v(" "),s("h2",{attrs:{id:"lec5-command-line-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lec5-command-line-environment"}},[e._v("#")]),e._v(" Lec5.Command-line Environment")])])}),[],!1,null,null,null);t.default=n.exports}}]);