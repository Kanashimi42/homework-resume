import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    imgSrc: string = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';
    imgAlt: string = 'myPhoto';
    name: string = 'Вячеслав';
    lastName: string = 'Барсуков';
    profession: string = 'IT Developer';
    homePhome: string = '+380637000258';
    phone: string = '+380637000258';
    email: string = 'barsukov200491@gmail.com';
    github: string = 'https://github.com/Kanashimi42';
    dateOfBirth: string = '15.02.04';
    city: string = 'Одесса';
    sectionContentAboutMe: string = 'Я Вячеслав. Я увлекаюсь программированием столько сколько я себя знаю, первые мои попытки это были небольшие игры на Unity и GameMaker Studio, так же я делаю моды для таких игр как Minecraft, Fallout 2, Fallout 4, TESV:Skyrim. Сейчас я учусь на специальность Компьютерные Науки в университете ItStep. ';
    skills: string[] = [
        'Верстка на HTML5, CSS,JavaScript, Программирование на C++, C#, Python, Java.', 
        'Игровые движки: Unity,Unreal Engine, GameMaker,Godot.',
        'Github, Valve Hammer, Bethesda Creation Kit',
        'Знания ООП'
    ];
}
