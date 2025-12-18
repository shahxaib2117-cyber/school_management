# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

const teachers_array = [
{
    name:'shahzaib',
    age:18,
    email:'shah@gmail.com',
    subjects:[english, urdu, scince, math, islamiat],
    slots:[{id:"slot-t1-1",subject:"urdu",status:"empty"}]
}
]

const students_array = [
{
    name:'shahzaib',
    age:18,
    email:'shah@gmail.com',
    selectedSubjects:[english, urdu, scince, math, islamiat],  yeh array tab fill hoga jab student teacher's_slots book karega.
    assignedlots:["slot-t1-1"]  or yeh array ki counting hogi (jo limit batayegi) ke kitne or subjects student book kar sakta hai.
}
]



0: {sub:['chemistry', 'urdu'] teacher: 'Basil Thomas'}
1: {sub: ['physics', 'commerce', 'science'] teacher: 'Evan Kirby'}

const attandance  = [
    {
        stdName: shahzaib,
        subject: english,
        teacherId: teacherId
    }
]

const assingments = [
    {
        title:'title',
        text:'text',
        date:'date',
        subject:'subject',
    }
]