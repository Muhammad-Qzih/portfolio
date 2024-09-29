import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      imgSrc: 'n3imn.png', 
      title: 'N3imn',
      description: 'A mobile app for barber-customer interactions with authentication, booking, and feedback. Built using Flutter and Firebase.',
      repoLink: 'https://github.com/Muhammad-Qzih/N3imn_Project'
    },
    {
      imgSrc: 'infoguard.png',
      title: 'InfoGuard System',
      description: 'Java-based system for user data export and deletion in compliance with Gaza authority regulations.',
      repoLink: 'https://github.com/tubasi18/advance-software-final-project'
    },
    {
      imgSrc: 'kafka.png', 
      title: 'Big Data Project',
      description: 'Real-time data capture, processing, and visualization using Kafka, Spark Scala, and MongoDB.',
      repoLink: 'https://github.com/Muhammad-Qzih/Big-Data-Project'
    },
    {
      imgSrc: 'shipify.png', 
      title: 'Shopify',
      description: 'A React app calling an API to view products like an e-commerce platform.',
      repoLink: 'https://github.com/Muhammad-Qzih/ASAL-Internship/tree/Product_Mock_API_React_Js_Project'
    }
  ];
}
