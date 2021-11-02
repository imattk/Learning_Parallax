let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
    .to('.bush', 3, { y:-300 })
    .to('.guy', 3, { y: -200 },"-=3")
    .fromTo('.bg2', 3, { y: -50 },{y:0},"-=3")
    .to('.first',3,{top: "0%"}, "-=3");

    let scene = new ScrollMagic.Scene({
        triggerElement: "section1",
        duration: "100%",
        triggerHook: 0, 
    })
    // .addIndicators()
    .setTween(timeline)
    .setPin('.section1')
    .addTo(controller);
    
// timeline
//     .to('.tree', 3, { y:-100 })
//     .to('.girl', 3, { y: -200 },"-=3")
//     .fromTo('.bg1', 3, { y: -50 },{y:0},"-=3")
//     .to('.second',3,{top: "0%"}, "-=3");
    
//     let scene2 = new ScrollMagic.Scene({
//         triggerElement: "content2",
//         duration: "100%",
//         triggerHook: 0, 
//     })
//     .addIndicators()
//     .setTween(timeline)
//     .setPin('.section2')
//     .addTo(controller);
    