<template>
    <div class="page">
        <router :type="'article'"></router>
        <div class="header">
            <img src="../../assets/icon.jpeg">
            <div class="title">
                <div class="tag">
                    <span>frontEnd</span>
                    <span>AutoTest</span>
                </div>
                <div class="main">Puppteer + jest 前端自动化测试方案探索和实践方案 </div>
                <div class="views">
                    <img src="../../assets/eye.svg">
                    <span>1,203</span>
                    <img src="../../assets/heart.svg">
                    <span>332</span>
                </div>   
            </div>
        </div>
        <div class="mainContainer">
            机器学习实际上已经存在了几十年或者也可以认为存在了几个世纪。追溯到17世纪，贝叶斯、拉普拉斯关于最小二乘法的推导和马尔可夫链，这些构成了机器学 习广泛使用的工具和基础。1950年(艾伦.图灵提议建立一个学习机器)到2000年初 (有深度学习的实际应用以及最近的进展，比如2012年的AlexNet)，机器学习有了很大的进展。 [3] 
            从20世纪50年代研究机器学习以来，不同时期的研究途径和目标并不相同，可以划分为四个阶段。
            第一阶段是20世纪50年代中叶到60年代中叶，这个时期主要研究“有无知识的学习”。这类方法主要是研究系统的执行能力。这个时期，主要通过对机器的环境及其相应性能参数的改变来检测系统所反馈的数据，就好比给系统一个程序，通过改变它们的自由空间作用，系统将会受到程序的影响而改变自身的组织，最后这个系统将会选择一个最优的环境生存。在这个时期最具有代表性的研究就是Samuet的下棋程序。但这种机器学习的方法还远远不能满足人类的需要。 [2] 
            第二阶段从20世纪60年代中叶到70年代中叶，这个时期主要研究将各个领域的知识植入到系统里，在本阶段的目的是通过机器模拟人类学习的过程。同时还采用了图结构及其逻辑结构方面的知识进行系统描述，在这一研究阶段，主要是用各种符号来表示机器语言，研究人员在进行实验时意识到学习是一个长期的过程，从这种系统环境中无法学到更加深入的知识，因此研究人员将各专家学者的知识加入到系统里，经过实践证明这种方法取得了一定的成效。在这一阶段具有代表性的工作有Hayes-Roth和Winson的对结构学习系统方法。 [2] 
            第三阶段从20世纪70年代中叶到80年代中叶，称为复兴时期。在此期间，人们从学习单个概念扩展到学习多个概念，探索不同的学习策略和学习方法，且在本阶段已开始把学习系统与各种应用结合起来，并取得很大的成功。同时，专家系统在知识获取方面的需求也极大地刺激了机器学习的研究和发展。在出现第一个专家学习系统之后，示例归纳学习系统成为研究的主流，自动知识获取成为机器学习应用的研究目标。1980 年，在美国的卡内基梅隆(CMU)召开了第一届机器学习国际研讨会，标志着机器学习研究已在全世界兴起。此后，机器学习开始得到了大量的应用。1984 年，Simon等20多位人工智能专家共同撰文编写的Machine Learning文集第二卷出版，国际性杂志Machine Learning创刊，更加显示出机器学习突飞猛进的发展趋势。这一阶段代表性的工作有Mostow的指导式学习、Lenat的数学概念发现程序、Langley的BACON程序及其改进程序。 [2] 
            第四阶段从20世纪80年代中叶到现在,是机器学习的最新阶段。这个时期的机器学习具有如下特点：
            (1)机器学习已成为新的学科，它综合应用了心理学、生物学、神经生理学、数学、自动化和计算机科学等形成了机器学习理论基础。
            (2)融合了各种学习方法，且形式多样的集成学习系统研究正在兴起。
            (3)机器学习与人工智能各种基础问题的统一性观点正在形成。
            (4)各种学习方法的应用范围不断扩大，部分应用研究成果已转化为产品。
        </div>
        <div class="date">
            <span>2019 / 10 / 07</span>
        </div>
    </div>
</template>
<script>
import router from '../common/router'
export default {
    name: 'articlePage',
    components: {
        router
    }
}
</script>
<style lang="less" scoped>
.page{
    padding-bottom: 200px;
}
.header{
    width: 70%;
    display: flex;
    margin: 100px auto;
    img{
        width: 40%; 
    }
    .title{
        margin-left: 10%;
        .tag{
            text-align: right;
            font-size: 18px;
            color: #fa8b5f;
            font-weight: 600;
            margin-bottom: 30px;
            span{
                margin: 0 10px;
            }
        }
        .main{
            font-size: 40px;
            font-weight: 600;
            letter-spacing: 5px;
            text-align: left;
            line-height: 50px;
        }
        .views{
            font-size: 13px;
            font-weight: 600;
            line-height: 20px;
            display: flex;
            letter-spacing: 1px;
            margin: 20px 0;
            span{
                margin: 0 10px;
            }
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
}

.mainContainer{
    width: 65%;
    margin: 0 auto;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 30px;
    text-align: left;
}
.date{
    width: 70%;
    margin: 50px auto;
    span{
        float: right;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
    }
}
</style>