
clientDir = "${ENVIRONMENT[:root_path]}/Client/"
namespace :client do
  
  desc 'Clean node_modules folder'
  task :clean_node_modules do
    clean_folder "node_modules/*"
  end

  desc 'Clean typings'
  task :clean_typings do
    clean_folder "typings/*"
  end

  desc 'Clean App/*.js.*'
  task :clean_js do
    clean_folder "App/*.js.*"
  end

  desc 'Clean Public/Vendor'
  task :clean_vendor do
    clean_folder "public/vendor/*"
  end
  
  

end


def clean_folder(path_folder)
      path = clientDir+path_folder
      cmd = "rm -r ${path}"
      `cmd`
end
  
      
  
