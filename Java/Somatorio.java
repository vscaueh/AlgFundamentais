public class Somatorio {

    public static double somatorio(double[] numeros) {
        double soma = 0;

        for (int i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        return soma;
    }

    public static void main(String[] args) {
        double[] numeros = {1, 2, 3, 4, 5};

        System.out.println("--- Somatorio ---");
        System.out.println("Quantidade de numeros: " + numeros.length);
        System.out.println("Soma: " + somatorio(numeros));
    }
}