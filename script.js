console.log(React);

let p = React.createElement("p",{
    style :{
        padding : "10px",
        lineHeight :"1.2",
        wordSpacing : '2px',
        backgroundColor : ''
        

    }
},"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

let div = React.createElement("div",{
    style :{
        // textAlign : "center",
        fontSize : "20px",
    }
},p);

ReactDOM.render(div,document.querySelector(".inner-text"));

let p1 = React.createElement("p",{
    style :{
        display : 'inline',
        // padding : "10px",
        lineHeight :"1.2",
        wordSpacing : '2px',
        fontSize : '20px',
        // padding :"20px"
    }
},"The aim of this area of MDN is not to take you from beginner to expert but to take you from beginner to comfortable. From there, you should be able to start making your way, learning from . ");

let p11 = React.createElement('p',{
    style : {
        display : 'inline',

        lineHeight :"1.2",
        wordSpacing : '2px',
        fontSize : '20px',
        // padding : '20px'
    }
},"  and other intermediate to advanced resources that assume a lot of previous knowledge.");

let anc = {
    lineHeight :"1.2",
        wordSpacing : '2px',
        fontSize : '20px'
}
let anchor = React.createElement("a",{
    href :"https://developer.mozilla.org/en-US/", 
    style : anc   
},"the rest of MDN")
let div2 = React.createElement("div",{style:{
    padding : '20px'
}},[p1,anchor,p11]);

ReactDOM.render(div2,document.querySelector(".inner-anchor-text"));


let p2 = React.createElement('p',{style :{
    padding : "10px",
    lineHeight :"1.2",
    wordSpacing : '2px',
    fontSize : '20px',
    backgroundColor : ''
    
}},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');
let div3 = React.createElement("div",{style :{
    padding : '20px'
}},p2);

ReactDOM.render(div3,document.querySelector(".inner-last-text"))