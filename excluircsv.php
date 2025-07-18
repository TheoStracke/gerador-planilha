<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = "dados.csv";
    if (file_exists($filename)) {
        unlink($filename);
        $novo = fopen($filename, "w");
        fclose($novo);
        echo "Arquivo CSV excluído e zerado.";
    } else {
        $novo = fopen($filename, "w");
        fclose($novo);
        echo "Arquivo não encontrado, mas arquivo zerado criado.";
    }
}
?>
