# Importing Flask library
from flask import Flask, render_template, request, redirect

# Creating a Flask app
app = Flask(__name__)

# Route for the home page
@app.route('/')
def home():
    # Rendering the home page
    return render_template('index.html')

# List to store books
books = []

# Route to add a new book
@app.route('/add', methods=['POST'])
def add_book():
    title = request.form['title']
    books.append(title)
    return redirect('/')


# Route to view books
@app.route('/books')
def view_books():
    return render_template('books.html', books=books)


# Route to delete a book
@app.route('/delete/<int:index>', methods=['POST'])
def delete_book(index):
    books.pop(index)
    return redirect('/')


# Running the app
if __name__ == '__main__':
    app.run(debug=True)
