class NeedForSpeed {
    public int speed;
    public int batteryDrain;
    private int distanceDriven;
    private int battery = 100;
    
    NeedForSpeed(int speed, int batteryDrain) {
        this.speed = speed;
        this.batteryDrain = batteryDrain;        
    }

    public boolean batteryDrained() {
        return battery < batteryDrain;
    }

    public int distanceDriven() {
        return distanceDriven;
    }

    public void drive() {
        if (!batteryDrained()) {
            distanceDriven += speed;
            battery -= batteryDrain;
        }
        
    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }

}

class RaceTrack {
    private int distance;
   
    RaceTrack(int distance) {
        this.distance = distance;
    }

    public boolean canFinishRace(NeedForSpeed car) {
        int numberOfDrives = 100 / car.batteryDrain;
        int maxDistance = car.speed * numberOfDrives;
        
        return this.distance <= maxDistance;
    }
}
