import render from './filterView.js';
import arr from '../data.js';

console.log(arr);

export default function () {
    
    console.log('Filter stated!');
    let index = 0;
    render(arr[0]);

    document.getElementById('app').addEventListener('click', function (event) {
        let target = event.target;
        if (target.hasAttribute("data-next")) {
            index = index + 1;
            render(arr[index]);
        }
    })
}