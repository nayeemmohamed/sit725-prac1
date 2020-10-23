class BiosensorClass{
    constructor(name,minHeartRate,maxHeartRate) {
        this.name = name;
        this.setHeartBeatRange(minHeartRate,maxHeartRate);
        this.startHeartBeat();
    }

    setHeartBeatRange(minHeartRate,maxHeartRate) { 
        this.minHeartRate=minHeartRate;
        this.maxHeartRate=maxHeartRate;
    }
      
    getHeartBeat(){
        return Math.floor(Math.random() * (this.maxHeartRate+1 - this.minHeartRate) + this.minHeartRate);
    }

    printHeartBeat(){
        console.log(this.name+' heartbeat = '+this.getHeartBeat());
    }

    startHeartBeat(){
        setInterval(()=>{this.printHeartBeat()},1500);
    }

}

let Andrea = new BiosensorClass('Andrea',65,70);
let James  = new BiosensorClass('James',60,65);