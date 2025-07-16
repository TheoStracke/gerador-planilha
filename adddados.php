<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $num_serie = $_POST['num_serie'];
    $ativar = $_POST['ativar'];
    $motivo = $_POST['motivo'];
    $data_inicial = date('d/m/Y', strtotime($_POST['data_inicial']));
    $data_final = date('d/m/Y', strtotime($_POST['data_final']));
    $filename = "dados.csv";

    $header = [
        'Nome',
        'Numero de Serie',
        'Ativar',
        'Motivo de desativação/ativação: 1 -> Fim do período de uso contratado; 4 -> Período de uso renovado',
        'Data Inicial',
        'Data Final'
    ];

    $writeHeader = !file_exists($filename) || filesize($filename) === 0;
    $file = fopen($filename, "a");
    if ($writeHeader) {
        fputcsv($file, $header);
    }
    fputcsv($file, array($nome, $num_serie, $ativar, $motivo, $data_inicial, $data_final));
    fclose($file);
    echo "<script>alert('Dados adicionados com sucesso!'); window.location.href='index.html';</script>";
}
?>
