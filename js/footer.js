document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    footer.innerHTML = '<footer class="bg-gradient-to-r from-gray-900 to-black text-gray-300 p-8 border-t border-gray-700">' +
        '<div class="container mx-auto">' +
            '<div class="flex flex-col md:flex-row justify-between items-center">' +
                '<div class="mb-4 md:mb-0">' +
                    '<div class="flex items-center space-x-2">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>' +
                        '<p class="text-sm">&copy; 2024 GitHub Integration. All rights reserved.</p>' +
                    '</div>' +
                '</div>' +
                '<div class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">' +
                    '<a href="#" class="hover:text-white transition-colors">Documentation</a>' +
                    '<a href="#" class="hover:text-white transition-colors">API Status</a>' +
                    '<a href="#" class="hover:text-white transition-colors">Privacy</a>' +
                    '<a href="#" class="hover:text-white transition-colors">Terms</a>' +
                    '<a href="#" class="hover:text-white transition-colors">Contact</a>' +
                '</div>' +
            '</div>' +
            '<div class="mt-6 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">' +
                '<p>Automate your GitHub workflow with seamless project integration</p>' +
            '</div>' +
        '</div>' +
    '</footer>';
});