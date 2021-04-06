import { Injectable } from '@angular/core';
import {IProducts} from './components/detail';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts() : IProducts []{
    return [
      {
        "subjId": 1,
        "subjName": "Javascript",
        "subjDetail": "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
      },
      {
        "subjId": 2,
        "subjName": "HTML",
        "subjDetail": "HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. ",
      },
      {
        "subjId": 3,
        "subjName": "MySQL",
        "subjDetail": "MySQL Database Service is a fully managed database service to deploy cloud-native applications. ",
      },
      {
        "subjId": 4,
        "subjName": "Node.js",
        "subjDetail": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.",
      },
      {
        "subjId": 5,
        "subjName": "Koa",
        "subjDetail": "Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications",
      },
      {
        "subjId": 6,
        "subjName": "Cloud",
        "subjDetail":"In the simplest terms, cloud computing means storing and accessing data and programs over the internet instead of your computer's hard drive.",
      },
      {
        "subjId": 7,
        "subjName": "Algorithm:Data Structure",
        "subjDetail": "Learning data structures and algorithms allow us to write efficient and optimized computer programs.",
      },
    ]
  }
}
