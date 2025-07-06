#!/usr/bin/php
<?php

$SOURCE_PATH = "../../mc-forditasok/create-skyblock-pack/";
$DESTINATION_PATH = "./src/assets/";

// List all directories in the source path
$directories = glob($SOURCE_PATH . '*/', GLOB_ONLYDIR);
if ($directories === false) {
    die("Failed to read directories from source path.");
}

// Iterate through each directory
foreach ($directories as $directory)
{
  // Get the directory name
  $dirName = basename(rtrim($directory, '/'));
  
  // Construct the soruce and destination path
  $destinationDir = $DESTINATION_PATH . $dirName . '/lang/';
  $sourceDir = $SOURCE_PATH . $dirName . '/lang/';

  echo " * Copying files from: $sourceDir to $destinationDir\n";

  // Create the destination directory if it doesn't exist
  if (!is_dir($destinationDir))
  {
    if (!mkdir($destinationDir, 0777, true))
    {
      die("Failed to create directory: $destinationDir");
    }
  }

  // Copy all files from the source directory to the destination directory
  $files = glob($sourceDir . '*.json');
  foreach ($files as $file)
  {
    $fileName = basename($file);
    echo "   - Copying file: $fileName\n";
    if (!copy($file, $destinationDir . $fileName)) {
        die("Failed to copy file: $file to $destinationDir");
    }
  }
}
