import React from 'react';
import '../Skills/skills.css';
import html from '../../assets/slider-photos/Html 5.png';
import css from '../../assets/slider-photos/CSS3.png';
import js from '../../assets/slider-photos/JavaScript.png';
import figma from '../../assets/slider-photos/Figma.png';
import git from '../../assets/slider-photos/Git.png';
import python from '../../assets/slider-photos/Python.png';
import react from '../../assets/slider-photos/React.png';
import flutter from '../../assets/slider-photos/Flutter.png';
import bootstrap from '../../assets/slider-photos/Bootstrap.png';
import firebase from '../../assets/slider-photos/Firebase.png';
import github from '../../assets/slider-photos/GitHub.png';
import linux from '../../assets/slider-photos/Linux.png';
import npm from '../../assets/slider-photos/NPM.png';
import ts from '../../assets/slider-photos/TypeScript.png';
import vscode from '../../assets/slider-photos/Visual Studio Code 2019.png';



function Skills() {
    return (
        <section className='logo'>
            <div className='logo-slider'>
                <img src={html} alt='HTML' />
                <img src={css} alt='CSS' />
                <img src={bootstrap} alt='Boostrap' />
                <img src={js} alt='JavaScript' />
                <img src={ts} alt='TypeScript' />
                <img src={react} alt='ReactJS' />
                <img src={python} alt='Python' />
                <img src={figma} alt='Figma' />
                <img src={git} alt='Git' />
                <img src={flutter} alt='Flutter' />
                <img src={firebase} alt='Firebase' />
                <img src={github} alt='GitHub' />
                <img src={linux} alt='Linux' />
                <img src={npm} alt='NPM' />
                <img src={vscode} alt='Visual Studio Code' />
            </div>
            <div className='logo-slider'>
                <img src={html} alt='HTML' />
                <img src={css} alt='CSS' />
                <img src={bootstrap} alt='Boostrap' />
                <img src={js} alt='JavaScript' />
                <img src={ts} alt='TypeScript' />
                <img src={react} alt='ReactJS' />
                <img src={python} alt='Python' />
                <img src={figma} alt='Figma' />
                <img src={git} alt='Git' />
                <img src={flutter} alt='Flutter' />
                <img src={firebase} alt='Firebase' />
                <img src={github} alt='GitHub' />
                <img src={linux} alt='Linux' />
                <img src={npm} alt='NPM' />
                <img src={vscode} alt='Visual Studio Code' />
            </div>
        </section>
    );
}

export default Skills;