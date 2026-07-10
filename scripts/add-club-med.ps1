$p = 'c:/Users/AKIKMANE/Documents/portfolio/src/data/project.js'
$s = Get-Content -Raw -Path $p

# already exists?
if ($s -match 'title:\s*"Club Med"') {
  Write-Host 'Club Med already exists'
  exit 0
}

# insert just before the closing of projects array
$obj = @"
  },
  {
    title: "Club Med",
    description: "Projet Club Med.",
    tech: [],
    github: "https://github.com/bighiepoh9ne/Projet-Club-Med-",
    demo: "https://github.com/bighiepoh9ne/Projet-Club-Med-"
  },
"@

$i = $s.LastIndexOf('];')
if ($i -lt 0) { throw 'Could not find array end' }

$prefix = $s.Substring(0, $i)
$suffix = $s.Substring($i)

$s = $prefix + $obj + $suffix
Set-Content -Path $p -Value $s -NoNewline
Write-Host 'Added Club Med'
