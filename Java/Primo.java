public class Primo {

    public static boolean ehPrimo(int n) {
        if (n < 2) return false;

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int num = 9;

        System.out.println("--- Verificador de Numero Primo ---");
        System.out.println("O numero " + num + (ehPrimo(num) ? " e primo" : " nao e primo"));
    }
}