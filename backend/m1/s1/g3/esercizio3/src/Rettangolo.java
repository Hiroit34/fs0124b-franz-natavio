public class Rettangolo {
    private float altezza;
    private float larghezza;

    public Rettangolo(float x, float y){
        this.altezza = y;
        this.larghezza = x;
    }

    public float getPerimetro(){
        return (altezza + larghezza)*2;
    }
    public float getArea(){
        return altezza*larghezza;
    }
    public void stampaREttangolo(Rettangolo x){
        System.out.println("Perimentro del rettangolo: " + getPerimetro());
        System.out.println("Area del rettangolo: " + getArea());
    }
    public void stampaDueRettangoli(Rettangolo x, Rettangolo y){
        System.out.println("somma area dei rettangoli " + (x.getArea()+y.getArea()));
        System.out.println("somma perimetri dei rettangoli " + (x.getPerimetro() + y.getPerimetro()));
    }
}

