<?php

namespace Prushak\Internship\Services;


class LogService
{
  public function log($file_name, $type_file, $reason = '')
  {
    $file_name = 'upload_' . date('d.m.Y') . '.log';
    $all_files = scandir('../storage/logs/');
    if (!array_key_exists(2, $all_files)) {
      fopen('../storage/logs/' . $file_name, 'w');
    }
    $content = file_get_contents('../storage/logs/' . $file_name);
    $content .= 'The data had not sent:' . $reason . date("Y-m-d H:i:s") . '/' . $file_name . '/' . $type_file . "\n";
    file_put_contents('../storage/logs/' . $file_name, $content);
  }
}