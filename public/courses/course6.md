<h1 id="heading-topic-to-be-covered">Topic to be covered:</h1>
<ol>
<li><p>Installing package’s in Termux</p>
</li>
<li><p>Exporting path for python,go, rust tool,etc</p>
</li>
<li><p>Using Bug hunting tool’s in termux.</p>
</li>
</ol>
<h1 id="heading-about-termux">About Termux:</h1>
<p>Termux is a powerful terminal emulator for Android that supports Linux-like environments, making it a great tool for mobile penetration testing and programming.</p>
<p>Well, It has been app for just show off in Youtube By so called youtuber’s. <mark>They have never felt the true power of termux.</mark> They don’t know how to use what to use , Just running some tool’s with their title “Hack Everything using Termux blabla“.</p>
<p>Here’s the Github Link for repo: <a target="_blank" href="https://github.com/termux">https://github.com/termux</a></p>
<h3 id="heading-lets-get-started">Let’s Get Started:</h3>
<p>Just after installing termux update &amp; upgrade it or simply copy paste below command’s.</p>
<p><code>apt update &amp;&amp; apt upgrade -y</code></p>
<p><code>pkg install python-pip git -y</code></p>
<p><code>pkg i vim</code> </p>
<p><code>clear</code></p>
<p>Before Starting I will suggest you to Learn about basic linux tutorials..</p>
<h1 id="heading-using-zsh-shell">Using Zsh shell:</h1>
<p>Termux supports all kind of shell but we will be using zsh .We will learn to setup <strong>autocompletion</strong>,<strong>autosuggestion and syntax-highlighting</strong> .</p>
<p>Repo for ohmyzsh:  <a target="_blank" href="https://github.com/ohmyzsh/ohmyzsh">Ohmyzsh</a>. </p>
<p>You Just need to Clone this Repo either by using <em>git or by using curl,wget</em>.</p>
<h1 id="heading-installation">Installation:</h1>
<p>paste the below code in termux :</p>
<p><code>wget</code> <a target="_blank" href="https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"><code>https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</code></a></p>
<p><code>sh</code> <a target="_blank" href="http://install.sh"><code>install.sh</code></a></p>
<p>You will have to  get new session like this .After this, Close the termux app and reopen it, You will see zsh shell (~) ,if not just type "zsh" without ("") you will see zsh shell being active</p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/3fa1f9b12ab1862423aa4e61877998de.jpg" alt /></p>
<p>For Auto-sugg &amp; auto completion’s.</p>
<p>Paste this directly in Terminal.</p>
<p><code>git clone</code> <a target="_blank" href="https://github.com/zsh-users/zsh-autosuggestions"><code>https://github.com/zsh-users/zsh-autosuggestions</code></a> <code>${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions</code></p>
<p> <code>git clone</code> <a target="_blank" href="https://github.com/zsh-users/zsh-syntax-highlighting.git"><code>https://github.com/zsh-users/zsh-syntax-highlighting.git</code></a> <code>${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</code></p>
<p><strong>Now for .zshrc</strong></p>
<p>We have to add those in path . For this ,if you want to use vim only type :alias nano="vim". Now as we will use nano Type. Just Copy and paste inside plugins():</p>
<p><code>nano ~/.zshrc</code></p>
<p><code>zsh-autosuggestions zsh-syntax-highlighting zsh-autocomplete</code></p>
<p>it should look like this: <mark>plugins(git zsh-autosuggestions zsh-syntax-highlighting zsh-autocomplete)</mark></p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/7d28f5a6002bda2213dcd228c5b17830.jpg" alt /></p>
<p>tap CTRL+x ,then y, then  hit enter from keyboard and Restart the terminal </p>
<p>Now you should see the changes like this:)</p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/a90cb32533b529278efcb12da828d6e8.jpg" alt /></p>
<p>See it suggest and do Autocomplete on choosing arrow keys or TAB keys from Keyboard.</p>
<p>If you are in office or workplace and have free time , You can do bug bounty stuff,solve programming problems from your android mobile too.</p>
<h1 id="heading-exporting-path"><strong>Exporting path</strong></h1>
<p><mark>Exporting go/python path for using golang/python based tool from anywhere in terminal.</mark></p>
<h1 id="heading-headache-for-beginners">HeadAche for beginner’s</h1>
<p>Before you need to change the directory to run go tool like this:</p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/e89467a3a99bf2997a60a3bcb303aeaa.jpg" alt /></p>
<p>But we will export go path and use this types of tool from anywhere in terminal.We will be using <a target="_blank" href="https://github.com/owasp-amass/amass">amass</a> .</p>
<p> Same goes for python based tool .We will learn to setup for them too in termux.We will use <a target="_blank" href="https://github.com/sqlmapproject/sqlmap">sqlmap</a> .</p>
<h1 id="heading-for-go-based-tool">For Go based tool</h1>
<p>Move to zshrc and copy and paste there.</p>
<p><code>nano ~/.zshrc</code></p>
<p>Paste below code in zshrc :</p>
<p><code>export GOROOT=/data/data/com.termux/files/usr/lib/go</code></p>
<p><code>export GOPATH=$HOME/go</code></p>
<p><code>export PATH=$PATH:$GOROOT/bin:$GOPATH/bin</code></p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/f8c795d4de593442a66097e005c512bc.jpg" alt /></p>
<p>2.Exit you know the method:)</p>
<p><em><mark>Now restart the termux and see the magic ,just type amass and hit enter ,it runs from direct terminal no need to change directory.</mark></em></p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/220c7f926b0b83dcb448aaa396e55988.jpg" alt /></p>
<h1 id="heading-for-python-tool">For Python tool</h1>
<p><mark>You have to change dir for python based tool too</mark>. It’s pain in ass and time consuming too.</p>
<p>Before: For running sqlmap</p>
<p><strong>cd sqlmap</strong> </p>
<p><strong>python</strong> <a target="_blank" href="http://sqlmap.py"><strong><a href="http://sqlmap.py" class="autolinkedURL autolinkedURL-url" target="_blank">sqlmap.py</a></strong></a> <strong>-u <a href="http://target.com" class="autolinkedURL autolinkedURL-url" target="_blank">target.com</a></strong></p>
<p>We will solve this too. locate where sqlmap or other python tool is located .</p>
<p>Again move to ~/.zshrc</p>
<p>for sqlmap</p>
<p>1.paste this at the end of line</p>
<p><code>sqlmap() {</code></p>
<p><code>python /data/data/com.termux/files/home/sqlmap/</code><a target="_blank" href="http://sqlmap.py"><code>sqlmap.py</code></a> <code>"$@"</code></p>
<p><code>}</code></p>
<p><mark>sqlmap runs with python, python3 so i have kept python at beginning if it's python2 tool keep python2 at first</mark></p>
<p>let's take one more example of paramspider.</p>
<p><code>paramspider() {</code></p>
<p><code>python /data/data/com.termux/files/home/ParamSpider/</code><a target="_blank" href="http://paramspider.py"><code>paramspider.py</code></a> <code>"$@"</code></p>
<p><code>}</code></p>
<p><a target="_blank" href="http://2.Save">Save</a> and exit and see the changes, No need to struggle more for changing directory.</p>
<p><strong>now you can run python tools directly as</strong></p>
<p><strong>sqlmap -u</strong> </p>
<p><strong>paramspider --h</strong></p>
<p><strong>from anywhere anytime…………….</strong></p>
<p><img loading="lazy" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63bfcbba3541b8005f5b8c61/room-content/a8b6e164e7c5bcc56bf6f704c611f3f9.jpg" alt /></p>
<h1 id="heading-more-apps">More app’s:</h1>
<p>1.Hackbar ,DH hackbar ,AndroHackbar,PentestSuite,Nmap scanner,OpenVpn</p>
<p>2.Coding C C++,Spck editor,Java,Kiwi Browser</p>
<p>We can host dvwa,our own sql servers,etc JuSt search it in Youtube .Do research.</p>
<h1 id="heading-final-thought">Final Thought:</h1>
<p>With Termux, you can learn bug hunting, programming,R.E. and more—all from your Android device. Use your free time wisely, whether you’re at work or free.</p>
<p>Remember, <strong>don’t limit yourself</strong>—you are the only one stopping yourself from achieving your goals. Start with what you have and go from there.</p>
<p>Best of luck on your journey!</p>