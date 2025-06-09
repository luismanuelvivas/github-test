document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.innerHTML = '<header class="bg-gradient-to-r from-gray-900 to-black text-white p-4 shadow-lg">' +
        ' <div class="container mx-auto flex justify-between items-center">' +
            '<div class="flex items-center space-x-2">' +
                '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">' +
                    '<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>' +
                '</svg>' +
                '<span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">GitSync Pro</span>' +
            '</div>' +
            '<nav>' +
                '<ul class="flex space-x-6">' +
                    '<li><a href="#" class="hover:text-blue-400 transition-colors duration-200">Home</a></li>' +
                    '<li><a href="#" class="hover:text-blue-400 transition-colors duration-200">Features</a></li>' +
                    '<li><a href="#" class="hover:text-blue-400 transition-colors duration-200">Pricing</a></li>' +
                    '<li><a href="#" class="hover:text-blue-400 transition-colors duration-200">Contact</a></li>' +
                    '<li><a href="#" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md">Get Started</a></li>' +
                '</ul>' +
            '</nav>' +
        '</div>' +
    '</header>';
});