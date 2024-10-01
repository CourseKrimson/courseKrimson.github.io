import os

def delete_course_files(start, end, directory):
    # Iterate through the range of course numbers
    for i in range(start, end + 1):
        # Construct the filename
        filename = f'course{i}.md'
        # Create the full path to the file
        file_path = os.path.join(directory, filename)
        
        # Check if the file exists and delete it
        if os.path.isfile(file_path):
            os.remove(file_path)
            print(f'Deleted: {file_path}')
        else:
            print(f'File not found: {file_path}')

# Directory where the course files are located
directory = 'public/courses/'

# Specify the range of course numbers to delete
delete_course_files(3, 33, directory)
