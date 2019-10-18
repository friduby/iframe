import os

os.system('npm run build')
os.system('cp -a build/ ~/workshop/gopaypro/api/templates/react/')
os.system('cp -a build/static/ ~/workshop/gopaypro/api/static/')
os.system('cp -a build/bank_logos/ ~/workshop/gopaypro/api/static/bank_logos/')

index = os.path.expanduser('~/workshop/gopaypro/api/templates/react/index.html')
with open(index, 'r') as file :
  filedata = file.read()
filedata = filedata.replace('/uikit.css', '/static/uikit.css')
with open(index, 'w') as file:
  file.write(filedata)

print ('done')