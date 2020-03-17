var robot = require("robotjs");
 
// Speed up the mouse.

setTimeout(() => {
    keyPress()
}, 10000);
const keyPress = () => {
    console.log('keypress event');
    
    const alpha = [data(), data2(), data3(), , data4(), data5(), data6(), data7()];
    const ran1 = Math.floor(Math.random()*10);
    const ran2 = Math.floor(Math.random()*10);
    const ran3 = Math.floor(Math.random()*10);
    const ran4 = Math.floor(Math.random()*10);
    const ran5 = Math.floor(Math.random()*10);
    const randonmString = `${alpha[ran1]}${alpha[ran2]}${alpha[ran3]}${alpha[ran4]}${alpha[ran5]}`
    robot.typeString(randonmString);
    robot.keyTap("enter");
    setTimeout(() => {
        mousemove()
    }, 5000);
}
const data = () => {
    return `             <div class="card-header" id="headingTop">
    <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse"
                data-target="#collapseTop" aria-expanded="true" aria-controls="collapseTop">
            Today
        </button>
    </h2>
</div>`
}
const data2 = () => {
    return `           <div id="collapseTop" class="collapse show" aria-labelledby="headingTop"
    data-parent="#accordionExample">
   <div class="card-body">
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked42">
           <label class="custom-control-label" for="defaultUnchecked42">New <span>(14)</span></label>
       </div>
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked43">
           <label class="custom-control-label" for="defaultUnchecked43">Needs Attention</label>
       </div>
   </div>
</div>`
}
const data3 = () => {
    return `             <div class="card-header" id="headingTop2">
    <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse"
                data-target="#collapseTop2" aria-expanded="true" aria-controls="collapseTop2">
            Needs Attention
        </button>
    </h2>
</div>`
}
const data4 = () => {
    return `<div id="collapseTop2" class="collapse" aria-labelledby="headingTop2"
    data-parent="#accordionExample">
   <div class="card-body">
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked45">
           <label class="custom-control-label" for="defaultUnchecked45">New <span>(14)</span></label>
       </div>
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked46">
           <label class="custom-control-label" for="defaultUnchecked46">Needs Attention</label>
       </div>
   </div>
</div>`
}
const data5 = () => {
    return `<div id="collapseOne" class="collapse" aria-labelledby="headingOne"
    data-parent="#accordionExample">
   <div class="card-body">
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked11">
           <label class="custom-control-label" for="defaultUnchecked11">Yes</label>
       </div>
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked13">
           <label class="custom-control-label" for="defaultUnchecked13">No</label>
       </div>
       <br>
       <label for="filter1">Profile Score</label>
       <div class="d-flex">
           <select class="gen-input browser-default form-control" id="filter1" style="">
               <option value="" disabled="" selected="">=</option>
               <option value="1"><</option>
               <option value="2">></option>
               <option value="3">=</option>
           </select>
           <input type="text" placeholder="Enter figure" class="browser-default gen-input">
           <!--<p style="margin: 0" class="input-label-perc">%</p>-->
       </div>

   </div>
</div>`
}
const data6 = () => {
    return `            <div id="collapse6" class="collapse" aria-labelledby="heading6"
    data-parent="#accordionExample">
   <div class="card-body">
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked21">
           <label class="custom-control-label" for="defaultUnchecked21">Stage Progress</label>
       </div>
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked22">
           <label class="custom-control-label" for="defaultUnchecked22">Stage Progress</label>
       </div>
       <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultUnchecked23">
           <label class="custom-control-label" for="defaultUnchecked23">Stage Progress</label>
       </div>
   </div>
</div>`
}
const data7 = () => {
    return `        <div class="row">
    <div class="col-sm-4" style="margin-bottom: 15px">
        <span class="table-add mb-3 mr-2">
            <a href="#" class="text-success">
        <i class="fas fa-plus"
           aria-hidden="true">

        </i>
        <span>ADD</span>
    </a>
        </span>
    </div>

</div>`
}

const mousemove = () => {
robot.setMouseDelay(2);
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
for (var x = 0; x < width; x++)
    {
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
        // robot.mouseClick()
    }
// var twoPI = Math.PI * 2.0;
// const ran1 = Math.floor(Math.random()*100);
// const ran2 = Math.floor(Math.random()*100);
// const ran3 = Math.floor(Math.random()*1000);
// const ran4 = Math.floor(Math.random()*1000);
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - ran1 ;
// var width = screenSize.width;
// const x = width+ran2
// const y = height * Math.sin((twoPI * x) / width) + height;
// robot.moveMouse(x, y);
// // robot.mouseToggle("down");
// // robot.dragMouse(ran3, ran4);
// robot.mouseToggle("up");
// robot.mouseClick();

console.log('move event');

    setTimeout(() => {
        keyPress()
    }, 10000);
}