# This course covers:
   - Installing and configuring OH MY ZSH
   - Customizing ZSH themes and plugins
   - Productivity tips for terminal users

## Requirements
   - Familiar with Bash, Terminal & Commands

### What is Zsh?
   <q>Zsh or Zshell is an enhanced, improved, and extended version of BASH (Bourne Again Shell).</q>

### Why Oh My Zsh?
   <code>Oh My Zsh</code> is an open-source framework used to customize zsh as well as manage its configs.

## Steps Performed:
--- 

### ZSH Installation
Installation may differ according to your OS. [See here](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

**For Ubuntu**: <code>$ sudo apt install zsh</code>

### Oh-My-Zsh Installation
Install **Oh-My-Zsh** according to your OS or distro. [See here](https://ohmyz.sh/#install)

**For Ubuntu**: <code>$ sh -c $(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)</code>

### Zsh Configuration
![Screenshot of Oh-My-Zsh](https://uploads.sitepoint.com/wp-content/uploads/2019/11/1573134240zsh-02.png)

Boom! Now, your .zshrc <i>(source file for zshell launch)</i> has been replaced by a new .zshrc file <i>(in your home dir or where you've installed it)</i>. The original .zshrc is kept as a backup file.

#### Themes
The first thing I'd ever do is to change my terminal theme as I like. So, let's explore what will suit us?
**Editing <q>.zshrc</q> file**
Go to <code>~</code> <i>(home dir or where you've installed it)</i>
I performed: <code>$ cd ~</code>
Choose your favorite editor and edit the **.zshrc** file.
I performed: <code>$ nano .zshrc</code>
To change the theme you need to change the value of <q>ZSH_THEME</q>.
For exploring themes, I placed <q>random</q>. So that, it will launch with any random theme at every instance.
If you've chosen one, just edit ~/.zshrc file and change the value of <q>ZSH_THEME</q> with the theme you want. 
I changed <code>ZSH_THEME="devcontainers"</code> to <code>ZSH_THEME="fino"</code>.

#### Auto-Suggestions
This plugin suggests commands based on your past history, saving you both effort and time.
**Installing <q>Auto-Suggestions</q> plugin**
Clone GitHub repository to install it: <code>git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions</code>.
After installing, again edit your **.zshrc** file and look for <q>plugins</q> config, and change <code># plugins=(git)</code> to <code>plugins=(git zsh-autosuggestions)</code>.

IMPORTANT: <i>See changes done by using zsh to launch again with new config(s).</i>

**Thank You! Jay Nepal!**
