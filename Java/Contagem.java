public class Contagem {

    public static int contarInteiros(double[] dados) {
        int contador = 0;

        for (int i = 0; i < dados.length; i++) {
            if (dados[i] == Math.floor(dados[i])) {
                contador++;
            }
        }
        return contador;
    }

    public static void main(String[] args) {
        double[] dados = {1, 2.5, 3, 4.7, 5};

        System.out.println("--- Contagem de Valores Inteiros ---");
        System.out.println("Total de dados (N): " + dados.length);
        System.out.println("Valores inteiros: " + contarInteiros(dados));
    }
}