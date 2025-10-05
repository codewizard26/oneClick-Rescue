export function Footer() {
    return (
        <footer className="mt-16 py-8 text-sm text-white/60 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>© {new Date().getFullYear()} one click rescue</div>
                <div className="flex gap-4">
                    <a href="https://sideshift.ai" target="_blank" className="hover:underline">Powered by SideShift.ai</a>
                    <a href="https://nextjs.org" target="_blank" className="hover:underline">Built with Next.js</a>
                </div>
            </div>
        </footer>
    );
}


