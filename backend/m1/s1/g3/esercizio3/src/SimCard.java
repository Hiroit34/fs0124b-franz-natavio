public class SimCard {
    private long numTelefono;
    private float credito;
    private int[] numChiamate;

    public SimCard(long t, float c){
        numTelefono = t;
        credito = c;
    }

    public long getNumero(){
        return numTelefono;
    }
    public float getCredito(){
        return credito;
    }
    public int[] getNumChiamate() {
        return numChiamate;
    }
}
