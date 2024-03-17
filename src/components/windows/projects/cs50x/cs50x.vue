<template>
	<div>
		<div class="header">
			<img class="header-img" :src="getImageSrc('harvard.png', true)" alt="Harvard Image">
			<h3 class="header-title">{{ headingTitle }}</h3>
			<h4 class="header-subtitle">{{ headingSubtitle }}</h4>

			<div class="badge">
				<button><label>Scratch</label></button>
				<button><label>C</label></button>
				<button><label>Arrays</label></button>
				<button><label>Algorithms</label></button>
				<button><label>Memory</label></button>
				<button><label>Data Structure</label></button>
				<button><label>Python</label></button>
				<button><label>AI</label></button>
				<button><label>SQL</label></button>
				<button><label>HTML CSS JavaScript</label></button>
				<button><label>Flask</label></button>
				<button><label>Cybersecurity</label></button>
			</div>
		</div>

		<hr>

		<div class="tabs">
			<div class="tab" :class="{ 'active-tab first': activeTab === 'week0' }" @click="setActiveTab('week0')">
				<img src='@/assets/icons/cs50x/scratch.svg'>
			</div>
			<div class="tab" :class="{ 'active-tab': activeTab === 'week1' }" @click="setActiveTab('week1')">
				<img src='@/assets/icons/cs50x/c.svg'>
			</div>
			<div class="tab" :class="{ 'active-tab': activeTab === 'week2' }" @click="setActiveTab('week2')">
				<img src='@/assets/icons/cs50x/arrays.svg'>
			</div>
			<div class="tab" :class="{ 'active-tab': activeTab === 'week3' }" @click="setActiveTab('week3')">
				<img src='@/assets/icons/cs50x/algorithm.png'>
			</div>
			<div class="tab" :class="{ 'active-tab': activeTab === 'week4' }" @click="setActiveTab('week4')">
				<img src='@/assets/icons/cs50x/memory.svg'>
			</div>
		</div>

		<div v-if="activeTab === 'week0'" class="content">
			<div v-for="(week0, index) in week0s" :key="index">
				<div class="title">
					<p class="name">{{ week0.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week0.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week0.desc }}</p>
				</div>
				<div class="iframe">
					<iframe :src="week0.iframeSource" allowtransparency="true" width="485" height="402" frameborder="10"
						scrolling="no" allowfullscreen></iframe>
				</div>
				<div class="link">
					<button @click="redirectToGitHub(week0.link)">
						<img src='@/assets/icons/cs50x/scratch.svg'>
						<label>Source code</label>
					</button>
				</div>
			</div>
		</div>

		<div v-if="activeTab === 'week1'" class="content">
			<div v-for="(week1, index) in week1s" :key="index">
				<div class="title">
					<p class="name">{{ week1.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week1.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week1.content }}</p>
					<ul>
						<li v-for="(objective, index) in week1.objectives" :key="index">
							{{ objective }}
						</li>
					</ul>
					<p class="name">Problem set</p>
					<div class="link">
						<button v-for="(pset, pindex) in week1.psets" :key="pindex" @click="toggleDetails(pindex)"
							:class="{ 'active-button': activeButtonIndex === pindex }">
							<label>{{ pset.title }}</label>
						</button>
					</div>
					<div v-for="(pset, pindex) in week1.psets" :key="pindex">
						<div v-show="activePsetIndex === pindex">
							<p class="comment">{{ pset.content }}</p>
							<iframe :src="getIframeSrc(pset.iframe)"></iframe>
							<div class="gif-container">
								<img class="gif" :src="getImageSrc(pset.image)">
							</div>
							<div class="link">
								<button @click="redirectToGitHub(pset.link)">
									<img src='@/assets/icons/social/github.png'>
									<label>Submission</label>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activeTab === 'week2'" class="content">
			<div v-for="(week2, index) in week2s" :key="index">
				<div class="title">
					<p class="name">{{ week2.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week2.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week2.content }}</p>
					<ul>
						<li v-for="(objective, index) in week2.objectives" :key="index">
							{{ objective }}
						</li>
					</ul>
					<p class="name">Problem set</p>
					<div class="link">
						<button v-for="(pset, pindex) in week2.psets" :key="pindex" @click="toggleDetails(pindex)"
							:class="{ 'active-button': activeButtonIndex === pindex }">
							<label>{{ pset.title }}</label>
						</button>
					</div>
					<div v-for="(pset, pindex) in week2.psets" :key="pindex">
						<div v-show="activePsetIndex === pindex">
							<p class="comment">{{ pset.content }}</p>
							<iframe :src="getIframeSrc(pset.iframe)"></iframe>
							<div class="gif-container">
								<img class="gif" :src="getImageSrc(pset.image)">
							</div>
							<div class="link">
								<button @click="redirectToGitHub(pset.link)">
									<img src='@/assets/icons/social/github.png'>
									<label>Submission</label>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activeTab === 'week3'" class="content">
			<div v-for="(week3, index) in week3s" :key="index">
				<div class="title">
					<p class="name">{{ week3.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week3.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week3.content }}</p>
					<ul>
						<li v-for="(objective, index) in week3.objectives" :key="index">
							{{ objective }}
						</li>
					</ul>
					<p class="name">Problem set</p>
					<div class="link">
						<button v-for="(pset, pindex) in week3.psets" :key="pindex" @click="toggleDetails(pindex)"
							:class="{ 'active-button': activeButtonIndex === pindex }">
							<label>{{ pset.title }}</label>
						</button>
					</div>
					<div v-for="(pset, pindex) in week3.psets" :key="pindex">
						<div v-show="activePsetIndex === pindex">
							<p class="comment">{{ pset.content }}</p>
							<iframe :src="getIframeSrc(pset.iframe)"></iframe>
							<div class="gif-container">
								<img class="gif" :src="getImageSrc(pset.image)">
							</div>
							<div class="link">
								<button @click="redirectToGitHub(pset.link)">
									<img src='@/assets/icons/social/github.png'>
									<label>Submission</label>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activeTab === 'week4'" class="content">
			<div v-for="(week4, index) in week4s" :key="index">
				<div class="title">
					<p class="name">{{ week4.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week4.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week4.content }}</p>
					<ul>
						<li v-for="(objective, index) in week4.objectives" :key="index">
							{{ objective }}
						</li>
					</ul>
					<p class="name">Problem set</p>
					<div class="link">
						<button v-for="(pset, pindex) in week4.psets" :key="pindex" @click="toggleDetails(pindex)"
							:class="{ 'active-button': activeButtonIndex === pindex }">
							<label>{{ pset.title }}</label>
						</button>
					</div>
					<div v-for="(pset, pindex) in week4.psets" :key="pindex">
						<div v-show="activePsetIndex === pindex">
							<p class="comment">{{ pset.content }}</p>
							<iframe :src="getIframeSrc(pset.iframe)"></iframe>
							<div class="gif-container">
								<img class="gif" :src="getImageSrc(pset.image)">
							</div>
							<div class="link">
								<button @click="redirectToGitHub(pset.link)">
									<img src='@/assets/icons/social/github.png'>
									<label>Submission</label>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-if="activeTab === 'week5'" class="content">
			<div v-for="(week5, index) in week5s" :key="index">
				<div class="title">
					<p class="name">{{ week5.title }}</p>
				</div>
				<div class="tags">
					<button v-for="(tag, index) in week5.tags" :key="index"><label>{{ tag }}</label></button>
				</div>
				<div class="desc">
					<p>{{ week5.content }}</p>
					<ul>
						<li v-for="(objective, index) in week5.objectives" :key="index">
							{{ objective }}
						</li>
					</ul>
					<p class="name">Problem set</p>
					<div class="link">
						<button v-for="(pset, pindex) in week5.psets" :key="pindex" @click="toggleDetails(pindex)"
							:class="{ 'active-button': activeButtonIndex === pindex }">
							<label>{{ pset.title }}</label>
						</button>
					</div>
					<div v-for="(pset, pindex) in week5.psets" :key="pindex">
						<div v-show="activePsetIndex === pindex">
							<p class="comment">{{ pset.content }}</p>
							<iframe :src="getIframeSrc(pset.iframe)"></iframe>
							<div class="gif-container">
								<img class="gif" :src="getImageSrc(pset.image)">
							</div>
							<div class="link">
								<button @click="redirectToGitHub(pset.link)">
									<img src='@/assets/icons/social/github.png'>
									<label>Submission</label>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			headingTitle: 'CS50X',
			headingSubtitle: '11 Weeks Computer Science Course and Projects from HarvardX',
			activeTab: 'week0',
			activePsetIndex: 0,
			activeButtonIndex: 0,
			week0s: [
				{
					title: 'Week 0 - Scratch',
					tags:
						[
							"Computer Science",
							"Computational Thinking",
							"Problem Solving: Inputs, Outputs",
							"Abstraction",
							"Algorithms",
							"Running Times",
							"Pseudocode",
							"Scratch"
						],
					desc: 'My project is a card matching game created in Scratch. The objective is to find matching pairs of cards with the same object. The game continues until all pairs are found. Users can interact with the game through mouse input by clicking on the cards to flip them.',
					responsibilities: [],
					iframeSource: 'https://scratch.mit.edu/projects/956175699/embed',
					link: 'https://scratch.mit.edu/projects/956175699/editor'
				}
			],
			week1s: [
				{
					title: 'Week 1 - C',
					tags:
						[
							'C', 'Source Code', 'Machine Code', 'Compiler', 'Syntax Highlighting', 'Escape Sequences', 'Libraries', 'Types', 'Conditionals', 'Variables', 'Loops', 'Linux', 'GUI', 'CLI', 'Pseudocode', 'Operators', 'Integer Overflow', 'Floating-Point Imprecision'
						],
					desc: '',
					responsibilities: [],
					iframeSource: '',
					content: 'In this lesson, I learned how to apply the building blocks that I had learned in Scratch to the C programming language.',
					objectives:
						[
							'How to create your first program in C.',
							'Predefined native C functions and how to implement your own functions.',
							'How to use variables, conditionals, and loops.',
							'How to approach abstraction to simplify and improve your code.',
							'How to approach problem-solving for a computer science problem.',
							'How to use the Linux command line.',
							'How to integrate comments into your code.',
							'How to utilize types and operators.'
						],
					psets: [
						{
							title: 'hello(me).c',
							content: 'In a file called hello.c, in a folder called me, implement a program in C that prompts the user for their name and then says hello to that user. For instance, if the user’s name is Adele, your program should print hello, Adele\n!',
							image: "hello(me).gif",
							iframe: 'Hello, It’s Me',
							link: 'https://github.com/muhammad-zulfikar/cs50x/tree/master/me/hello.c'
						},
						{
							title: 'mario.c',
							content: 'In a file called mario.c in a folder called mario-less, implement a program in C that recreates that pyramid, using hashes (#) for bricks. But prompt the user for an int for the pyramid’s actual height',
							image: "mario.gif",
							iframe: 'Mario',
							link: 'https://github.com/muhammad-zulfikar/cs50x/tree/master/mario-less/mario.c'
						},
						{
							title: 'cash.c',
							content: 'In a file called cash.c in a folder called cash, implement a program in C that prints the minimum coins needed to make the given amount of change, in cents',
							image: "cash.gif",
							iframe: 'Cash',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/cash/cash.c'
						},
					]
				}
			],
			week2s: [
				{
					title: 'Week 2 - Arrays',
					tags:
						[
							"Preprocessing",
							"Compiling",
							"Assembling",
							"Linking",
							"Debugging",
							"Arrays",
							"Strings",
							"Command-Line Arguments",
							"Cryptography"
						],
					desc: '',
					responsibilities: [],
					iframeSource: '',
					content: 'In this lesson, you learned more details about compiling and how data is stored within a computer.',
					objectives:
						[
							"Generally, how a compiler works.",
							"How to debug your code using four methods.",
							"How to utilize arrays within your code.",
							"How arrays store data in back to back portions of memory.",
							"How strings are simply arrays of characters.",
							"How to interact with arrays in your code.",
							"How command-line arguments can be passed to your programs.",
							"The basic building-blocks of cryptography."
						],
					psets: [
						{
							title: 'scrabble.c',
							content: 'In a file called scrabble.c in a folder called scrabble, implement a program in C that determines the winner of a short Scrabble-like game.',
							image: "scrabble.gif",
							iframe: 'Scrabble',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/scrabble/scrabble.c'
						},
						{
							title: 'readability.c',
							content: 'In a file called readability.c in a folder called readability, you’ll implement a program that calculates the approximate grade level needed to comprehend some text.',
							image: "readability.gif",
							iframe: 'Readability',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/readability/readability.c'
						},
						{
							title: 'caesar.c',
							content: 'In a file called caesar.c in a folder called caesar, write a program that enables you to encrypt messages using Caesar’s cipher.',
							image: "caesar.gif",
							iframe: 'Caesar',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/caesar/caesar.c'
						},
					]
				}
			],
			week3s: [
				{
					title: 'Week 3 - Algorithm',
					tags:
						[
							"Searching: Linear Search, Binary Search",
							"Sorting: Bubble Sort, Selection Sort, Merge Sort",
							"Asymptotic Notation: Ο, Ω, Θ",
							"Recursion"
						],
					desc: '',
					responsibilities: [],
					iframeSource: '',
					content: 'In this lesson, you learned about algorithmic thinking and building your own data types.',
					objectives:
						[
							"Algorithms",
							"Big O notation",
							"Binary search and linear search",
							"Various sort algorithms, including bubble, selection, and merge sort",
							"Recursion"
						],
					psets: [
						{
							title: 'sort.c',
							content: 'In this problem, you’ll analyze three (compiled!) sorting programs to determine which algorithms they use. In a file called answers.txt in a folder called sort, record your answers, along with an explanation for each program, by filling in the blanks marked TODO.',
							image: "",
							iframe: 'Sort',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/sort/answers.txt'
						},
						{
							title: 'plurality.c',
							content: 'For this problem, you’ll implement a program that runs a plurality election.',
							image: "plurality.gif",
							iframe: 'Plurality',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/plurality/plurality.c'
						},
						{
							title: 'runoff.c',
							content: 'In a file called runoff.c in a folder called runoff, create a program to simulate a runoff election.',
							image: "runoff.gif",
							iframe: 'Runoff',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/runoff/runoff.c'
						},
					]
				}
			],
			week4s: [
				{
					title: 'Week 4 - Memory',
					tags:
						[
							"Pointers",
							"Segmentation Faults",
							"Dynamic Memory Allocation",
							"Stack",
							"Heap",
							"Buffer Overflow",
							"File I/O",
							"Images"
						],
					desc: '',
					responsibilities: [],
					iframeSource: '',
					content: 'In this lesson, you learned about pointers that provide you with the ability to access and manipulate data at specific memory locations.',
					objectives:
						[
							"Pixel art",
							"Hexadecimal",
							"Memory",
							"Pointers",
							"Strings",
							"Pointer Arithmetic",
							"String Comparison",
							"Copying",
							"malloc and Valgrind",
							"Garbage values",
							"Swapping",
							"Overflow",
							"scanf",
							"File I/O"
						],
					psets: [
						{
							title: 'volume.c',
							content: 'In a file called volume.c in a folder called volume, write a program to modify the volume of an audio file.',
							image: "volume.gif",
							iframe: 'Volume',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/volume/volume.c'
						},
						{
							title: 'filter.c',
							content: 'In a file called helpers.c in a folder called filter-more, write a program to apply filters to BMPs.',
							image: "plurality.gif",
							iframe: 'Filter',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/filter-more/helpers.c'
						},
						{
							title: 'recover.c',
							content: 'In a file called recover.c in a folder called recover, write a program to recover JPEGs from a memory card.',
							image: "runoff.gif",
							iframe: 'Recover',
							link: 'https://github.com/muhammad-zulfikar/cs50x/blob/master/recover/recover.c'
						},
					]
				}
			],
			week5s: [
				{
					title: 'Week 5 - Data Structure',
					tags:
						[
							"Abstract Data Types",
							"Queues",
							"Stacks",
							"Linked Lists",
							"Trees",
							"Binary Search Trees",
							"Hash Tables",
							"Tries"
						],
					desc: '',
					responsibilities: [],
					iframeSource: '',
					content: 'In this lesson, you learned about using pointers to build new data structures.',
					objectives:
						[
							"Data structures",
							"Stacks and queues",
							"Resizing arrays",
							"Linked lists",
							"Dictionaries",
							"Tries"
						],
					psets: [
						{
							title: 'inheritance.c',
							content: 'In a file called inheritance.c in a folder called inheritance, simulate the inheritance of blood types for each member of a family.',
							image: "inheritance.gif",
							iframe: 'Inheritance',
							link: 'https://google.com'
						},
						{
							title: 'speller.c',
							content: 'For this problem, you’ll implement a program that spell-checks a file, a la the below, using a hash table.',
							image: "speller.gif",
							iframe: 'Speller',
							link: 'https://google.com'
						},
					]
				}
			],
		};
	},
	methods: {
		setActiveTab(tab) {
			this.activeTab = tab;
		},
		getImageSrc(imageName, isHeaderImage = false) {
			let imagePath = '';

			if (!imageName || imageName.trim() === '') {
				return imagePath;
			}

			if (isHeaderImage) {
				imagePath = require('@/assets/icons/win95/' + imageName);
			} else {
				imagePath = require('./gif/' + imageName);
			}

			return imagePath;
		},
		getIframeSrc(html) {
			let filename = `${html} - CS50x 2024.html`;
			let path = `https://muhammad-zulfikar.github.io/files/documents/projects/cs50x/pset/${html}/${filename}`;
			return path;
		},
		openWindow(windowId) {
			const payload = {
				windowState: "open",
				windowID: windowId,
			};
			this.$store.commit("setWindowState", payload);
		},
		redirectToGitHub(link) {
			window.open(link, "_blank");
		},
		togglePset(weekIndex, psetIndex) {
			this.activePsetIndex = psetIndex;
		},
		toggleDetails(pindex) {
			if (this.activeButtonIndex === pindex) {
				this.activePsetIndex = null;
				this.activeButtonIndex = null;
			} else {
				this.activePsetIndex = pindex;
				this.activeButtonIndex = pindex;
			}
		},
	},
};
</script>


<style scoped>
/* Global */
.header,
.content {
	padding: 20px 0;
}

/* Header */
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.header-img {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 60px;
	padding-bottom: 20px;
}

.header-title {
	text-align: center;
	font-weight: bold;
	margin-bottom: 10px;
}

.header-subtitle {
	font-size: 13px;
	color: gray;
	text-align: center;
}

.badge {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	margin-top: 10px;
}

.badge button {
	display: flex;
	align-items: center;
	margin: 10px 5px 2px 5px;
	padding: 5px;
	padding-bottom: 2.5px;
	background: rgb(189, 190, 189);
	box-shadow: 1px 1.5px black;
	border-top: solid rgb(250, 250, 250) 1px;
	border-left: solid rgb(250, 250, 250) 1px;
	border-bottom: solid rgb(90, 90, 90) 1px;
	border-right: solid rgb(90, 90, 90) 1px;
}

.badge label {
	font-size: 11px;
}

/* Tabs */
.tabs {
	display: flex;
	font-size: 13px;
	justify-content: left;
	padding-top: 20px;
}

.tab {
	cursor: url('@/assets/cursor/pointer.cur'), auto !important;
	padding: 1px 5px;
	margin-right: .3px;
	border-top: solid rgb(250, 250, 250) 3px;
	border-left: solid rgba(250, 250, 250) 3px;
	border-right: solid rgb(90, 90, 90) 3px;
	border-bottom: solid rgb(250, 250, 250) 1px;
}

.tab img {
	width: 20px;
	cursor: url('@/assets/cursor/pointer.cur'), auto !important;
	padding-top: 5px;
}

.active-tab {
	font-weight: bold;
	border-bottom: 5px solid rgb(195, 195, 195);
	position: relative;
	z-index: 9999;
}

.active-tab.first::before {
	content: "";
	position: absolute;
	left: -2px;
	width: 2px;
	height: calc(100% + 5px);
	background-color: rgba(250, 250, 250);
	z-index: 9998;
}

/* Content */
.content {
	border-top: solid rgb(250, 250, 250) 3px;
	border-left: solid rgb(250, 250, 250) 3px;
	border-bottom: solid rgb(90, 90, 90) 3px;
	border-right: solid rgb(90, 90, 90) 3px;
	padding: 10px;
	margin-top: -3px;
	position: relative;
	z-index: 1;
}

.title {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.name {
	text-align: center;
	padding: 20px;
	font-weight: bold;
}

.tags {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	margin-bottom: 30px;
}

.tags button {
	display: flex;
	align-items: center;
	padding: 5px;
	padding-bottom: 2.5px;
	height: 25px;
	margin: 5px 5px 2px 5px;
	width: auto;
	border: 2px solid white;
	background: rgb(189, 190, 189);
	box-shadow: 1.5px 1.5px black;
	border-top: solid rgb(250, 250, 250) 1.5px;
	border-left: solid rgb(250, 250, 250) 1.5px;
	border-bottom: solid rgb(90, 90, 90) 1.5px;
	border-right: solid rgb(90, 90, 90) 1.5px;
}

.tags label {
	padding-top: 2px;
	font-size: 12px;
	padding-left: 3px;
}

.desc {
	padding: 0 30px 0 30px;
	font-size: 15px;
	text-align: justify;
	margin-bottom: 20px;
}

li {
	list-style: inside;
	margin-bottom: 5px;
	text-align: justify;
	font-size: 15px;
	padding: 0;
}

iframe {
	width: 100%;
	height: 350px;
}

.comment {
	text-align: center;
	padding: 10px;
}

.gif-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.gif {
	width: 100%;
	padding: 10px;
}

.link {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	margin-top: -10px;
}

.link button {
	display: flex;
	align-items: center;
	padding: 5px;
	height: 30px;
	margin: 10px 10px 0 0;
	width: auto;
	border: 2px solid white;
	background: rgb(189, 190, 189);
	box-shadow: 1.5px 1.5px black;
	border-top: solid rgb(250, 250, 250) 1.5px;
	border-left: solid rgb(250, 250, 250) 1.5px;
	border-bottom: solid rgb(90, 90, 90) 1.5px;
	border-right: solid rgb(90, 90, 90) 1.5px;
	cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link img {
	height: 22px;
	padding-bottom: 2px;
	cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link label {
	padding-top: 2px;
	padding-left: 5px;
	font-size: 13px;
	cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link button {
	background-color: rgb(189, 190, 189);
}

.link button.active-button {
	background-color: darkgray;
}


/* Normalize */
h2,
h3,
h4 {
	padding: 0;
	margin: 0;
}

@media screen and (max-width: 1024px) {
	.role {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		line-height: 1.3;
		padding: 15px 0;
	}

	.name {
		margin-top: 15px;
	}

	.desc {
		padding: 5px;
	}

	.desc li {
		text-align: left;
	}
}
</style>