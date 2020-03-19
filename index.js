var robot = require("robotjs");
var cmd=require('node-cmd');
 

const broserEvent = () => {
    cmd.run('google-chrome')
    const timeout = 25000
    setTimeout(() => {
    robot.typeString('bitbucket.org/notchteam/notch-angular/src/develop');
    robot.keyTap("enter");
    scrollPage()
    setTimeout(() => {
        robot.keyTap('T', 'control');
        robot.typeString('localhost'); robot.keyTap(';', 'shift'); robot.typeString('4200/sales/deals-list')
        robot.keyTap("enter");
        scrollPage()
        setTimeout(() => {
            robot.keyTap('w', ['control', 'shift']); 
            keyPress()
        }, 3000);
        return
        setTimeout(() => {
            robot.keyTap('T', 'control')
            robot.typeString('mailgun.com');
            robot.keyTap("enter");
            scrollPage()
            setTimeout(() => {
                robot.keyTap('T', 'control');
                robot.typeString('postman.com');
                robot.keyTap("enter");
                scrollPage()
                setTimeout(() => {
                    robot.keyTap('T', 'control');
                    robot.typeString('localhost'); robot.keyTap(';', 'shift'); robot.typeString('4200/ticket/ticket-dashboard')
                    robot.keyTap("enter");
                    scrollPage()
                    setTimeout(() => {
                        robot.keyTap('T', 'control');
                        robot.typeString('twilio.com');
                        robot.keyTap("enter");
                        scrollPage()
                        setTimeout(() => {
                            robot.keyTap('tab', ['control', 'shift']);
                            setTimeout(() => {
                                robot.keyTap('tab', ['control', 'shift']);
                                setTimeout(() => {
                                    robot.keyTap('tab', ['control', 'shift']);
                                    setTimeout(() => {
                                        robot.keyTap('tab', ['control', 'shift']); 
                                        setTimeout(() => {
                                            robot.keyTap('w', ['control', 'shift']); 
                                            setTimeout(() => {
                                                keyPress()
                                            }, 3000);
                                        }, timeout);
                                    }, timeout);
                                }, timeout);
                            }, timeout);
                        }, timeout);
                    }, timeout);
                }, timeout);
            }, timeout);
        }, timeout);
    }, timeout);
    }, 2000);

}
const scrollPage = () => {
    setTimeout(() => {
        const screenSize = robot.getScreenSize()
        var height = screenSize.height + screenSize.height;
        var width = screenSize.width  - 400;
        robot.moveMouseSmooth(width, height)
    }, 5000);
}

const keyPress = () => {
    console.log('keypress event');
    const alpha = [data(), data2(), data3(), , data4(), data5(), data6(), data7()];
    const ran1 = Math.floor(Math.random()*10);
    const randonmString = `${alpha[ran1] ? alpha[ran1] : alpha[3]}`
    robot.typeString(randonmString);
    robot.keyTap("enter");
    setTimeout(() => {
        broserEvent()
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
    console.log(screenSize);
    var height = screenSize.height;
    var width = screenSize.width  - 400;
    robot.dragMouse(width, height)
}
setTimeout(() => {
    keyPress()
    mousemove()
}, 10000);
