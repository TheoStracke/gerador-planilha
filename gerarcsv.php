<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = "TemplateSafeID.xlsx";
    if (file_exists($filename)) {
        header('Content-Description: File Transfer');
        header('Content-Type: text/xlsx');
        header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filename));
        flush();
        readfile($filename);
        unlink($filename); 
        exit;
    } else {
        echo "<script>alert('Nenhum arquivo CSV para baixar!'); window.location.href='index.html';</script>";
    }
}
?>
