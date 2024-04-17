public class Main {

    public static void main(String[] args) {
        Rettangolo rettangolo = new Rettangolo(3,2);
        System.out.println(rettangolo.getArea());
        System.out.println(rettangolo.getPerimetro());
        Rettangolo rettangolo1 = new Rettangolo(3,6);
        System.out.println(rettangolo1.getArea());
        System.out.println(rettangolo1.getPerimetro());

        rettangolo1.stampaREttangolo(rettangolo1);
        rettangolo1.stampaDueRettangoli(rettangolo, rettangolo1);

        //Inizio esercizio numero 2
        SimCard simCard = new SimCard(12345,0);
        System.out.println("il numero di telefono è il seguente: " + simCard.getNumero());

    }
}