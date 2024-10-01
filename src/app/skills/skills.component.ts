import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML 5', img: 'skills/icon-1.png', desc: 'Proficient in structuring web content using HTML5 elements and best practices.' },
    { name: 'CSS 3', img: 'skills/icon-2.png', desc: 'Skilled in creating responsive layouts and visual effects using CSS3.' },
    { name: 'JavaScript', img: 'skills/icon-3.png', desc: 'Experienced in scripting for dynamic functionality and interactivity in web applications.' },
    { name: 'SASS', img: 'skills/icon-4.png', desc: 'Proficient with SASS for writing maintainable and modular CSS.' },
    { name: 'JQuery', img: 'skills/icon-5.png', desc: 'Familiar with simplifying JavaScript with jQuery for DOM manipulation and events.' },
    { name: 'React.js', img: 'skills/icon-6.png', desc: 'Knowledgeable in building reusable UI components and managing state with React.' },
    { name: 'Github', img: 'skills/icon-7.png', desc: 'Experienced in version control and collaboration through GitHub.' },
    { name: 'Java', img: 'skills/icon-8.png', desc: 'Understanding of object-oriented programming and backend logic using Java.' },
    { name: 'Git', img: 'skills/icon-9.png', desc: 'Skilled in managing code versions and collaborating on projects with Git.' },
    { name: 'Bootstrap', img: 'skills/icon-10.png', desc: 'Proficient in using Bootstrap for building responsive, mobile-first websites.' },
  ];
}

